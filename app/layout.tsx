import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
};

const font = Nunito({
	subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
