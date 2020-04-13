const pageWidth = 1200;
const pageMarginTablet = 32;

const dimensions = {
	'page-width': `${pageWidth}px`,
	'page-margin-big': `${pageMarginTablet}px`,
	'page-margin-small': '16px'
};
const mediaQueries = {
	mobile: '(max-width: 540px)',
	tablet: '(max-width: 768px)',
	'tablet-wide': '(max-width: 1024px)',
	'content-max-width': `(max-width: ${pageWidth + 2 * pageMarginTablet}px)`
};
const colors = {
	'primary-color': '#b7da71',
	'ordered-list-numbers-color': '#99cb34'
};

module.exports = Object.assign({}, dimensions, mediaQueries, colors);
