import React from 'react';

export const Page = ({ page, onClick }) => {
	return (
		<>
			<h3 onClick={onClick}>{page.title}</h3>
		</>
	);
};
