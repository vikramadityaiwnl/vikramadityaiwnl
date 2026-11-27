"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform vec2 resolution;
  uniform float time;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    float aspect = resolution.x / resolution.y;
    float t = time;

    vec2 warmCenter = vec2(
      0.5 + sin(t * 0.38) * 0.2,
      0.5 + cos(t * 0.29) * 0.13
    );
    vec2 warmOffset = (uv - warmCenter) * vec2(aspect * 0.72, 1.18);
    float warmGlow = exp(-dot(warmOffset, warmOffset) * 2.5);

    vec2 amberCenter = vec2(
      0.5 + cos(t * 0.25 + 1.4) * 0.27,
      0.52 + sin(t * 0.32 + 0.8) * 0.2
    );
    vec2 amberOffset = (uv - amberCenter) * vec2(aspect * 0.9, 1.35);
    float amberGlow = exp(-dot(amberOffset, amberOffset) * 5.0);

    vec2 hazeCenter = vec2(
      0.5 + sin(t * 0.18 + 2.2) * 0.18,
      0.48 + cos(t * 0.23 + 1.1) * 0.16
    );
    vec2 hazeOffset = (uv - hazeCenter) * vec2(aspect * 0.58, 1.7);
    float hazeGlow = exp(-dot(hazeOffset, hazeOffset) * 1.35);

    vec3 color = vec3(0.07);
    color = mix(color, vec3(0.19), hazeGlow * 0.78);
    color = mix(color, vec3(0.29), warmGlow * 0.78);
    color += vec3(0.035) * amberGlow;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export function SpotlightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: false, antialias: false });
    if (!canvas || !gl) return;

    function compileShader(type: number, source: string) {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertex = compileShader(gl.VERTEX_SHADER, vertexShader);
    const fragment = compileShader(gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const resolution = gl.getUniformLocation(program, "resolution");
    const timeUniform = gl.getUniformLocation(program, "time");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let startTime = 0;

    function draw(timestamp = 0) {
      if (!canvas || !gl) return;
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.round(canvas.clientWidth * scale);
      const height = Math.round(canvas.clientHeight * scale);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      if (!startTime) startTime = timestamp;
      const elapsed = reducedMotion.matches
        ? 0
        : (timestamp - startTime) / 1000;
      gl.uniform1f(timeUniform, elapsed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!reducedMotion.matches && !document.hidden)
        frame = requestAnimationFrame(draw);
    }

    function restart() {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(draw);
    }

    restart();
    window.addEventListener("resize", restart);
    document.addEventListener("visibilitychange", restart);
    reducedMotion.addEventListener("change", restart);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", restart);
      document.removeEventListener("visibilitychange", restart);
      reducedMotion.removeEventListener("change", restart);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4a4a4a_0%,#2d2d2d_48%,#121212_100%)]"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
