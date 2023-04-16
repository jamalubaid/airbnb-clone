'use client'

import { FC } from 'react'
import Image from 'next/image'

const Avatar: FC = () => {
	return (
		<Image
			className="rounded-full"
			src="/images/placeholder.jpg"
			alt="Avatar"
			width="30"
			height="30"
		/>
	)
}

export default Avatar
