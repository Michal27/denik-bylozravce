---
to: src/components/<%= h.changeCase.camelCase(name) %>/<%= h.changeCase.camelCase(name) %>.less
---
<%
	className = 'component-' + h.changeCase.paramCase(name);
-%>
.<%= className %> {

}
