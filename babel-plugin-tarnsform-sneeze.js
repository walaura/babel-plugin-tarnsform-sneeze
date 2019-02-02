const { parse } = require('@babel/parser');

module.exports = function(whatisthat, { tokens }) {
	return {
		name: 'babel-plugin-tarnsform-sneeze',
		parserOverride: (code, opts) => {
			if (!tokens) tokens = ['🤧', '💨'];
			const re = new RegExp(`^${tokens.join('')}+`, 'giu');
			const clean = code
				.split('\n')
				.map(line => line.replace(re, ''))
				.join('\n');
			return parse(clean, opts);
		},
	};
};
