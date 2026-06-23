import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/MacSysSounds.ts'],
  format: ['esm'],
  target: 'node24',
  sourcemap: true,
  minify: true,
  splitting: false,
  clean: true,
  dts: true,
  outDir: 'dist',
});
