import { FC } from 'react';
import { SafeListing, SafeUser } from '@/app/types';
import Container from '@/app/components/Container';
import Heading from '@/app/components/Heading';
import ListingCard from '@/app/components/listings/ListingCard';

interface IFavoritesClientProps {
	listings: SafeListing[];
	currentUser?: SafeUser | null;
}

const FavoritesClient: FC<IFavoritesClientProps> = ({
	currentUser,
	listings,
}) => {
	if (!currentUser) {
		return null;
	}

	return (
		<Container>
			<Heading
				title="Favorites"
				subtitle="List of places you have favorited!"
			/>
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
				{listings.map((listing) => (
					<ListingCard
						data={listing}
						key={listing.id}
						currentUser={currentUser}
					/>
				))}
			</div>
		</Container>
	);
};

export default FavoritesClient;
