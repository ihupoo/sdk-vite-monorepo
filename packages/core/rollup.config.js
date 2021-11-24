import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import json from '@rollup/plugin-json'

export default defineConfig([
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/umd/bundle.js',
				format: 'umd',
				name: 'sdkCore',
				sourcemap: true,
			},
		],
		plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve(), commonjs(), strip(), json()],
	},
	{
		input: 'src/index.ts',
		output: [
			{
				// file: 'es/bundle.es.js',
				format: 'esm',
				preserveModules: true,
				preserveModulesRoot: 'src',
				dir: 'dist/esm',
			},
			{
				dir: 'dist/cjs',
				format: 'cjs',
				preserveModules: true,
				preserveModulesRoot: 'src',
				exports: 'named',
			},
		],
		plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve(), commonjs(), strip(), json()],
	},
])
