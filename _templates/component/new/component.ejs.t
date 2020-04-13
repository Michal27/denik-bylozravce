---
to: src/components/<%= h.changeCase.camelCase(name) %>/<%= h.changeCase.pascalCase(name) %>.jsx
---
<%
	className = 'component-' + h.changeCase.paramCase(name);
	pascalCaseName = h.changeCase.pascalCase(name);
	camelCaseName = h.changeCase.camelCase(name);
-%>
import PropTypes from 'prop-types';
import React from 'react';
import './<%= camelCaseName %>.less';

class <%= pascalCaseName %> extends React.Component {
	render() {
		return (
			<div className = '<%= className %>' />
		);
	}
}

<%= pascalCaseName %>.propTypes = {
	replaceMe: PropTypes.string
};

<%= pascalCaseName %>.defaultProps = {
	replaceMe: ''
};

export default <%= pascalCaseName %>;
