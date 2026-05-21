import pxToRem from 'postcss-pxtorem';

export default {
	plugins: [
		pxToRem({
			rootValue: 16,
			unitPrecision: 4,
			propList: ['*', '!font', '!*border*'],
			selectorBlackList: [/\w*::(?:after|before)$/],
			replace: true,
			mediaQuery: false,
			minPixelValue: 4
		})
	]
};
