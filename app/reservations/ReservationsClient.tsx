'use client';

import { FC, useCallback, useState } from 'react';
import { SafeReservation, SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import Container from '@/app/components/Container';
import Heading from '@/app/components/Heading';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ListingCard from '@/app/components/listings/ListingCard';

interface IReservationsClientProps {
	reservations: SafeReservation[];
	currentUser?: SafeUser | null;
}

const ReservationsClient: FC<IReservationsClientProps> = ({
	currentUser,
	reservations,
}) => {
	const router = useRouter();
	const [deletingId, setDeletingId] = useState('');

	const onCancel = useCallback(
		(id: string) => {
			setDeletingId(id);

			axios
				.delete(`/api/reservations/${id}`)
				.then(() => {
					toast.success('Reservation called');
					router.refresh();
				})
				.catch(() => {
					toast.error('Something went wrong.');
				})
				.finally(() => {
					setDeletingId('');
				});
		},
		[router]
	);

	return (
		<Container>
			<Heading title="Reservations" subtitle="Bookings on your properties" />
			<div
				className="
					mt-10
					grid
					grid-cols-1
					sm:grid-cols-2
					md:grid-cols-3
					lg:grid-cols-4
					xl:grid-cols-5
					2xl:grid-cols-6
					gap-8
				"
			>
				{reservations.map((reservation) => (
					<ListingCard
						data={reservation.listing}
						key={reservation.id}
						reservation={reservation}
						actionId={reservation.id}
						onAction={onCancel}
						disabled={deletingId === reservation.id}
						actionLabel="Cancel guest reservation"
						currentUser={currentUser}
					/>
				))}
			</div>
		</Container>
	);
};

export default ReservationsClient;
