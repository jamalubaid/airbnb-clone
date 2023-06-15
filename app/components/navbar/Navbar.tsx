'use client';

import { User } from '@prisma/client';
import { FC } from 'react';

import Container from '@/app/components/Container';
import Logo from '@/app/components/navbar/Logo';
import Search from '@/app/components/navbar/Search';
import UserMenu from '@/app/components/navbar/UserMenu';
import { SafeUser } from '@/app/types'

interface INavbar {
	currentUser?: SafeUser | null;
}
const Navbar: FC<INavbar> = ({ currentUser }) => {
	return (
		<div className="fixed w-full bg-white z-10 shadow-sm">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div className="flex flex-row justify-between items-center gap-3 md:gap-0">
						<Logo />
						<Search />
						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Navbar;
