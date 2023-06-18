import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import { tr } from 'date-fns/locale';

export async function POST(request: Request) {
	const currentUser = await getCurrentUser();
	/*
	const body = await request.json();

	const { email } = body;*/

	const result = await prisma.user.update({
		where: {
			id: '643c26ec803a19fc251fe5b6',
		},
		data: {
			reservations: {
				create: {
					id: '643c26ec803a19fc251fe56b',
					endDate: '',
					startDate: '',
					totalPrice: 0,
					listingId: '',
				},
			},
		},
	});
	console.log(result);
	return NextResponse.json(result);
}
