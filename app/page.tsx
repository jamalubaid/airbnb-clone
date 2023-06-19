import ClientOnly from '@/app/components/ClientOnly';
import Container from '@/app/components/Container';
import EmptyState from '@/app/components/EmptyState';
import getListings, { IListingsParams } from '@/app/actions/getListings';
import getCurrentUser from '@/app/actions/getCurrentUser';
import ListingCard from '@/app/components/listings/ListingCard';

interface IHomeProps {
	searchParams: IListingsParams;
}

const Home = async ({ searchParams }: IHomeProps) => {
	const listings = await getListings(searchParams);
	const currentUser = await getCurrentUser();

	if (listings?.length === 0) {
		return (
			<ClientOnly>
				<EmptyState showReset />
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<Container>
				<div
					className="
						pt-24
						grid
						grid-col
						sm:grid-cols-2
						md:grid-cols-3
						lg:grid-cols-4
						xl:grid-cols-5
						2xl:grid-cols-6
						gap-8
					"
				>
					{listings?.map((listing: any) => {
						return (
							<ListingCard
								key={listing.id}
								data={listing}
								currentUser={currentUser}
							/>
						);
					})}
				</div>
			</Container>
		</ClientOnly>
	);
};

export default Home;
