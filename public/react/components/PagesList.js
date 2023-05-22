import React from 'react';
import { Page } from './Page';

export const PagesList = ({ pages, onPageClick }) => {
	return (
		<>
			{pages.map((page, idx) => (
				<Page page={page} key={idx} onClick={() => onPageClick(page.slug)} />
			))}
		</>
	);
};

