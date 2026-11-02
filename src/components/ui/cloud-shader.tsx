import React, { useEffect, useRef, useState } from 'react';

export interface CloudShaderProps {
  speed?: number;
  count?: number;
  cloudColor?: string;
  skyTopColor?: string;
  skyBottomColor?: string;
  className?: string;
  children?: React.ReactNode;
}

// Convert hex color string to normalized RGB float array [r, g, b]
function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '').trim();
  let r = 0, g = 0, b = 0;
  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16) / 255;
    g = parseInt(cleanHex[1] + cleanHex[1], 16) / 255;
    b = parseInt(cleanHex[2] + cleanHex[2], 16) / 255;
  } else if (cleanHex.length === 6) {
    r = parseInt(cleanHex.substring(0, 2), 16) / 255;
    g = parseInt(cleanHex.substring(2, 4), 16) / 255;
    b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  }
  return [r, g, b];
}

const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;

  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_speed;
  uniform float u_count;
  uniform vec3 u_cloudColor;
  uniform vec3 u_skyTopColor;
  uniform vec3 u_skyBottomColor;
  varying vec2 v_uv;

  // Hash without sine for GPU consistency
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // Bilinear smooth value noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    // Quintic hermite curve for smoother derivative
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  // Multi-octave Fractional Brownian Motion (fBm)
  float fbm(vec2 p) {
    float total = 0.0;
    float amp = 0.5;
    float freq = 1.0;
    
    // 5 octaves for fine atmospheric detail
    for (int i = 0; i < 5; i++) {
      total += noise(p * freq) * amp;
      freq *= 2.05;
      amp *= 0.5;
    }
    return total;
  }

  // Domain-warped procedural clouds
  float cloudField(vec2 uv, float t) {
    vec2 movement = vec2(t * 0.03 * u_speed, t * 0.012 * u_speed);

    // Domain warp stage 1
    vec2 q = vec2(
      fbm(uv + movement),
      fbm(uv + vec2(5.2, 1.3) + movement * 1.2)
    );

    // Domain warp stage 2
    vec2 r = vec2(
      fbm(uv + 4.0 * q + vec2(1.7, 9.2) + movement * 0.8),
      fbm(uv + 4.0 * q + vec2(8.3, 2.8) + movement * 0.6)
    );

    float f = fbm(uv + 3.5 * r + movement);
    return clamp(f * f * 2.2, 0.0, 1.0);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 st = uv;
    st.x *= aspect;

    // Scale space based on cloud count density
    float densityScale = mix(1.2, 3.2, clamp((u_count - 1.0) / 5.0, 0.0, 1.0));
    vec2 scaledSt = st * densityScale;

    float t = u_time * 0.8;

    // Atmospheric sky gradient with gentle curve
    float skyGradientFactor = smoothstep(0.0, 1.0, v_uv.y);
    vec3 sky = mix(u_skyBottomColor, u_skyTopColor, skyGradientFactor);

    // Generate volumetric cloud density
    float clouds = cloudField(scaledSt, t);

    // Secondary subtle high-altitude cirrus layer for rich depth
    float highClouds = fbm(scaledSt * 1.8 + vec2(t * 0.06 * u_speed, t * 0.02 * u_speed));
    highClouds = smoothstep(0.45, 0.85, highClouds) * 0.35;

    // Cloud shading, rim lighting, and atmospheric blending
    float cloudMask = smoothstep(0.32, 0.78, clouds);
    cloudMask = clamp(cloudMask + highClouds * 0.4, 0.0, 1.0);

    // Subtle edge glow / sunlight diffusion
    vec3 cloudShaded = mix(u_cloudColor * 0.65, u_cloudColor * 1.15, clouds);
    
    // Ambient vignette on the borders
    float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
    vignette = clamp(pow(16.0 * vignette, 0.25), 0.0, 1.0);

    vec3 finalColor = mix(sky, cloudShaded, cloudMask * 0.88);
    finalColor *= mix(0.85, 1.0, vignette);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export function CloudShader({
  speed = 1.0,
  count = 6,
  cloudColor = "#2a364f",
  skyTopColor = "#05070c",
  skyBottomColor = "#0d131f",
  className = "w-full h-full",
  children,
}: CloudShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  const speedRef = useRef(speed);
  const countRef = useRef(count);
  const cloudColorRef = useRef(cloudColor);
  const skyTopColorRef = useRef(skyTopColor);
  const skyBottomColorRef = useRef(skyBottomColor);

  speedRef.current = speed;
  countRef.current = count;
  cloudColorRef.current = cloudColor;
  skyTopColorRef.current = skyTopColor;
  skyBottomColorRef.current = skyBottomColor;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance',
    }) || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) {
      console.warn('WebGL not supported, rendering CSS fallback');
      setWebglSupported(false);
      return;
    }

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) {
      setWebglSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setWebglSupported(false);
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      setWebglSupported(false);
      return;
    }

    gl.useProgram(program);

    // Full-screen Quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const aPositionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPositionLocation);
    gl.vertexAttribPointer(aPositionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const uSpeedLoc = gl.getUniformLocation(program, 'u_speed');
    const uCountLoc = gl.getUniformLocation(program, 'u_count');
    const uCloudColorLoc = gl.getUniformLocation(program, 'u_cloudColor');
    const uSkyTopColorLoc = gl.getUniformLocation(program, 'u_skyTopColor');
    const uSkyBottomColorLoc = gl.getUniformLocation(program, 'u_skyBottomColor');

    let animationFrameId: number;
    const startTime = performance.now();

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = Math.floor(canvas.clientWidth * dpr);
      const displayHeight = Math.floor(canvas.clientHeight * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    const render = (time: number) => {
      resize();

      const elapsed = (time - startTime) * 0.001;

      if (uTimeLoc) gl.uniform1f(uTimeLoc, elapsed);
      if (uResolutionLoc) gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      if (uSpeedLoc) gl.uniform1f(uSpeedLoc, speedRef.current);
      if (uCountLoc) gl.uniform1f(uCountLoc, countRef.current);

      const [cr, cg, cb] = hexToRgb(cloudColorRef.current);
      if (uCloudColorLoc) gl.uniform3f(uCloudColorLoc, cr, cg, cb);

      const [tr, tg, tb] = hexToRgb(skyTopColorRef.current);
      if (uSkyTopColorLoc) gl.uniform3f(uSkyTopColorLoc, tr, tg, tb);

      const [br, bg, bb] = hexToRgb(skyBottomColorRef.current);
      if (uSkyBottomColorLoc) gl.uniform3f(uSkyBottomColorLoc, br, bg, bb);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (gl) {
        gl.deleteBuffer(positionBuffer);
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
      }
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block pointer-events-none"
        />
      ) : (
        // High-end fallback if WebGL is unavailable
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#05070c] via-[#0d131f] to-[#06070a] pointer-events-none"
        />
      )}
      {children && <div className="relative z-10 w-full h-full">{children}</div>}
    </div>
  );
}

export default CloudShader;

