import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/icons.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: true,
  treeshake: true,
  external: ["foldkit", "lucide"],
});
