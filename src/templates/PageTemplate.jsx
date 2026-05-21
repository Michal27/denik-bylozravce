import React from "react";
import PropTypes from "prop-types";
import Navigation from "../components/navigation/Navigation";
import "./pageTemplate.less";

function PageTemplate({ children, logoSrc }) {
	return (
		<div className='page-template'>
			<header className='page-template-header'>
				<Navigation logoSrc={logoSrc} />
			</header>
			<main className='page-template-main'>
				{children}
			</main>
			<footer>
				© {new Date().getFullYear()} Deník býložravce
			</footer>
		</div>
	);
}

PageTemplate.propTypes = {
	children: PropTypes.node.isRequired,
	logoSrc: PropTypes.string.isRequired
};

export default PageTemplate;
