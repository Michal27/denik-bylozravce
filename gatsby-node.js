exports.onCreatePage = ({ page, actions }) => {
	const { createPage } = actions;

	if (page.path === `/page-2/`) {
		page.matchPath = `/page-2/:id`;
		createPage(page);
	}
};
