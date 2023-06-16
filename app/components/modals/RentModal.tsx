'use client';

import { FC, useMemo, useState } from 'react';
import Modal from './Modal';
import useRentModal from '@/app/hooks/useRentModal';
import Heading from '@/app/components/Heading';
import { categories } from '@/app/components/navbar/Categories';
import CategoryInput from '@/app/components/inputs/CategoryInput';
import { FieldValues, useForm } from 'react-hook-form';

enum STEPS {
	CATEGORY = 0,
	LOCATION = 1,
	INFO = 2,
	IMAGES = 3,
	DESCRIPTION = 4,
	PRICE = 5,
}

const RentModal: FC = () => {
	const rentModal = useRentModal();

	const [step, setStep] = useState(STEPS.CATEGORY);

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		watch,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			category: '',
			location: null,
			guestCount: 1,
			roomCount: 1,
			bathroomCount: 1,
			imageSrc: '',
			price: 1,
			title: '',
			description: '',
		},
	});

	const category = watch('category');
	console.log(category);
	const setCustomValue = (id: string, value: any) => {
		console.log(id, value);
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	const onBack = () => {
		setStep((value) => value - 1);
	};

	const onNext = () => {
		setStep((value) => value + 1);
	};

	const actionLabel = useMemo(() => {
		if (step === STEPS.PRICE) {
			return 'Create';
		}

		return 'Next';
	}, [step]);

	const secondaryActionLabel = useMemo(() => {
		if (step === STEPS.CATEGORY) {
			return undefined;
		}

		return 'Back';
	}, [step]);

	let bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading
				title="With of these best desribes your place?"
				subtitle="Pick a category"
			/>
			<div
				className="
					grid
			 		grid-cols-1
			 		md:grid-cols-2
			 		gap-3
			 		max-h-[50vh]
			 		overflow-y-auto"
			>
				{categories.map((item) => (
					<div key={item.label} className="col-span-1">
						<CategoryInput
							icon={item.icon}
							label={item.label}
							selected={category === item.label}
							onClick={(category) => setCustomValue('category', category)}
						/>
					</div>
				))}
			</div>
		</div>
	);

	return (
		<Modal
			isOpen={rentModal.isOpen}
			onClose={rentModal.onClose}
			onSubmit={rentModal.onClose}
			actionLabel={actionLabel}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
			title="Airbnb your home"
			body={bodyContent}
		/>
	);
};

export default RentModal;
