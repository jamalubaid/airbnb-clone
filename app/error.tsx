'use client';

import { FC, useEffect } from 'react';
import EmptyState from '@/app/components/EmptyState';

interface IErrorStateProps {
	error: Error;
}

const ErrorState: FC<IErrorStateProps> = ({ error }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
};

export default ErrorState;
