'use client';

import { FC, ReactNode } from 'react';

interface IContainerProps {
	children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
	return (
		<div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
			{children}
		</div>
	);
};

export default Container;
