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
				file: 'dist/bundle.umd.js',
				format: 'umd',
				name: 'sdkCore',
				sourcemap: true,
			},
			{
				file: 'dist/bundle.es.js',
				format: 'es',
				sourcemap: true,
			},
			{
				file: 'dist/bundle.cjs.js',
				format: 'cjs',
				sourcemap: true,
			},
		],
		plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve(), commonjs(), strip(), json()],
	},
])
