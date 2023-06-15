'use client'

import { FC } from 'react'
import Image from 'next/image'

interface IAvatar {
	src: string | null | undefined;
}
const Avatar: FC<IAvatar> = ({src}) => {
	return (
		<Image
			className="rounded-full"
			src={src || '/images/placeholder.jpg'}
			alt="Avatar"
			width="30"
			height="30"
		/>
	)
}

export default Avatar
