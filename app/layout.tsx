import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.css';
import RegisterModal from '@/app/components/modals/RegisterModal';
import Navbar from '@/app/components/navbar/Navbar';
import ToasterProvider from '@/app/providers/ToasterProvider';

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
				<ToasterProvider />
				<RegisterModal />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
