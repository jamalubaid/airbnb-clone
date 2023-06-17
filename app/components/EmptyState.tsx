'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Heading from '@/app/components/Heading';
import Button from '@/app/components/Button';

interface IEmptyState {
	title?: string;
	subtitle?: string;
	showReset?: boolean;
}

const EmptyState: FC<IEmptyState> = ({
	showReset,
	subtitle = 'Try changing or removing some of your filters',
	title = 'No exact matches',
}) => {
	const router = useRouter();
	return (
		<div
			className="
				h-[60vh]
				flex
				flex-col
				gap-2
				justify-center
				items-center
			"
		>
			<Heading title={title} center subtitle={subtitle} />
			<div className="w-48 mt-4">
				{showReset && (
					<Button
						outline
						label="Remove all filters"
						onClick={() => router.push('/')}
					/>
				)}
			</div>
		</div>
	);
};

export default EmptyState;
