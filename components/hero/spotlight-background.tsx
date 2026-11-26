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
  uniform float pulse;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    // Measure both axes in screen-height units so the glow stays circular.
    vec2 offset = (uv - vec2(0.5)) * vec2(resolution.x / resolution.y, 1.0);
    float distanceFromLight = length(offset);
    float glow = 1.0 - smoothstep(0.0, 1.05 + pulse * 0.035, distanceFromLight);
    glow = pow(glow, 1.2);
    vec3 edge = vec3(0.07, 0.07, 0.07);
    vec3 center = vec3(0.29, 0.29, 0.29) * (1.0 + pulse * 0.025);
    gl_FragColor = vec4(mix(edge, center, glow), 1.0);
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
    const pulse = gl.getUniformLocation(program, "pulse");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let startTime = 0;

    function draw(time = 0) {
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
      if (!startTime) startTime = time;
      const elapsed = reducedMotion.matches ? 0 : (time - startTime) / 1000;
      gl.uniform1f(pulse, reducedMotion.matches ? 0 : Math.sin(elapsed * 0.45));
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
