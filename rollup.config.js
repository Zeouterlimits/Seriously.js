export default [
	{
		input: 'index.js',
		plugins: [
		],
		output: [
			{
				format: 'umd',
				name: 'Seriously',
				file: 'build/seriously.js',
				indent: '\t'
			}
		]
	},
	{
		input: 'index.js',
		plugins: [
		],
		output: [
			{
				format: 'esm',
				file: 'build/seriously.module.js',
				indent: '\t'
			}
		]
	}
];