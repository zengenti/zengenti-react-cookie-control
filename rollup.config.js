import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';

const packageJson = require("./package.json");

const config = [
  // CommonJS build
  {
    input: "src/index.ts",
    output: {
      file: packageJson.main, // e.g. dist/index.cjs.js
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      babel({
        presets: ['@babel/react'],
        babelHelpers: 'bundled',
      }),
    ],
    external: [
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
  },

  // ESModule build
  {
    input: "src/index.ts",
    output: {
      file: packageJson.module, // e.g. dist/index.esm.js
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      babel({
        presets: ['@babel/react'],
        babelHelpers: 'bundled',
      }),
    ],
    external: [
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
  },
  // TypeScript declaration files
  {
    input: "dist/types/index.d.ts", // where your auto-generated d.ts files are
    output: [{ file: "dist/types/zengenti-react-cookie-control.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

export default config;
