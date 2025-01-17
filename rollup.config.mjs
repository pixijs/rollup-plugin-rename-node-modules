import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json" assert { type: 'json' };

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "auto",
    },
    {
      file: pkg.module,
      format: "esm",
      exports: "auto",
    },
  ],
  external: [...Object.keys(pkg.dependencies), 'path'],
  plugins: [typescript()],
};
