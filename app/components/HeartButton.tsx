'use client';

import { FC } from 'react';
import { SafeUser } from '@/app/types';
import { AiFillHdd, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useFavorite from '@/app/hooks/useFavorite';

interface IHeartButtonProps {
	listingId: string;
	currentUser?: SafeUser | null;
}

const HeartButton: FC<IHeartButtonProps> = ({ currentUser, listingId }) => {
	const { toggleFavorite, hasFavorited } = useFavorite({
		listingId,
		currentUser,
	});
	return (
		<div
			onClick={toggleFavorite}
			className="
				relative
				hover:opacity-80
				transiton
				cursor-pointer
			"
		>
			<AiOutlineHeart
				size={28}
				className="
					fill-white
					absolute
					-top-[2px]
					-right-[2px]
				"
			/>
			<AiFillHeart
				size={24}
				className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
			/>
		</div>
	);
};

export default HeartButton;
