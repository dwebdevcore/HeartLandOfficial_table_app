import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
	return (
		<svg
			width={`${props.size}px`}
			height={`${props.size}px`}
			viewBox="0 0 1024 1024"
			role="img"
			className={props.className}
		>
			<title>{props.title}</title>
			<path d={props.path} />
		</svg>
	);
};

Icon.propTypes = {
	path: PropTypes.string.isRequired,
	title: PropTypes.string,
	size: PropTypes.number,
	className: PropTypes.string
};

Icon.defaultProps = {
	size: 16,
	className: 'icon'
};

export default Icon;
