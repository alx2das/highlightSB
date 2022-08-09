import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { uglify } from "rollup-plugin-uglify";
import commonjs from "@rollup/plugin-commonjs";
import styles from "rollup-plugin-styles";

export default {
	input: "src/lib.tsx",
	output: {
		name: "createLessonSection",
		file: "./dist/lib.js",
		format: "iife",
		sourcemap: true,
		assetFileNames: "[name][extname]",
	},
	plugins: [
		peerDepsExternal(),
		resolve({
			preferBuiltins: true,
			mainFields: ["browser"],
		}),
		commonjs(),
		replace({
			preventAssignment: false,
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		typescript({ tsconfig: "./tsconfig.json" }),
		json(),
		styles({
			mode: "extract",
			minimize: true,
		}),
		uglify(),
	],
};
