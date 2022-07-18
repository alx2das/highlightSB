import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import stylusCssModules from "rollup-plugin-stylus-css-modules";
import css from "rollup-plugin-import-css";
import json from "@rollup/plugin-json";

const packageJson = require("./package.json");

export default {
	input: "src/index.ts",
	// external: [
	// 	"classnames",
	// 	"diff",
	// 	"highlight.js",
	// 	"react-waypoint"
	// ],
	output: [
		{
			file: packageJson.main,
			format: "cjs",
			sourcemap: true,
			name: packageJson.name,
			strict: false,
		},
		{
			file: packageJson.module,
			format: "esm",
			sourcemap: true,
		},
	],
	plugins: [
		external(),
		resolve(),
		commonjs(),
		typescript({ tsconfig: "./tsconfig.json" }),
		json(),
		css(),
		stylusCssModules(),
		terser(),
	],
};
