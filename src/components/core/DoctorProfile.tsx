import type { Doctor } from "@/lib/data-source";
import Image from "next/image";
import GradientButton from "./GradientButton";
import ContactCard from "./ContactCard";
import PhoneCircleIcon from "../icons/PhoneCircleIcon";
import Link from "next/link";
import BusinessCardCircleIcon from "../icons/BusinessCardCircleIcon";
import MailCircleIcon from "../icons/MailCircleIcon";
import { ChevronRightIcon } from "lucide-react";

interface DoctorProfileProps {
	profile: Doctor;
}

export default function DoctorProfile(props: DoctorProfileProps) {
	const { profile } = props;

	const {
		name,
		imageUrl,
		accreditations,
		description,
		languages,
		specialties,
		specialInterests,
		gmcNumber,
		phone,
		email,
	} = profile;

	return (
		<section className="container mx-auto">
			<div className="bg-white rounded-xl border-2 border-white flex flex-col-reverse lg:flex-row lg:gap-10 p-2 mx-4 lg:p-10 card-shadow">
				<div className="space-y-5">
					<div className="bg-blue-300 hidden lg:block h-[346px] lg:max-w-[550px] lg:min-w-[350px] rounded-xl overflow-hidden border-[2px] border-white relative card-shadow">
						<Image
							src={imageUrl}
							alt={name}
							fill
							className="w-full h-full object-cover"
						/>
					</div>
					<Link href="/booking" className="hidden lg:block">
						<GradientButton
							text="Book an appointment"
							classNames="w-full text-sm !font-normal mb-5"
						/>
					</Link>
					<div className="flex flex-col gap-5">
						{gmcNumber && (
							<ContactCard
								title="GMC Number"
								text={gmcNumber}
								icon={BusinessCardCircleIcon}
							/>
						)}
						{phone && (
							<ContactCard title="Phone Number" text={phone} icon={PhoneCircleIcon} />
						)}
						{email && <ContactCard title="Email" text={email} icon={MailCircleIcon} />}
					</div>
				</div>
				<div className="flex-1 mb-6">
					<h1 className="text-primary-dark font-semibold text-center text-2xl leading-8 lg:text-left lg:text-3xl lg:leading-7 mb-1">
						{name}
					</h1>
					<div className="font-medium text-gray-500 text-center lg:text-left text-base lg:text-xl mb-5">
						<p>{specialties.map((specialty) => specialty.title).join(", ")}</p>
					</div>
          <div className="bg-blue-300 block lg:hidden h-[346px] lg:max-w-[550px] lg:min-w-[350px] rounded-xl overflow-hidden border-[2px] border-white mb-3 relative card-shadow">
						<Image
							src={imageUrl}
							alt={name}
							fill
							className="w-full h-full object-cover"
						/>
					</div>
					<Link href="/booking" className="block lg:hidden">
						<GradientButton
							text="Book an appointment"
							classNames="w-full text-sm !font-normal mb-5"
						/>
					</Link>
          
					<div className="bg-blue-500 rounded-xl py-1.5 px-5 divide-y divide-gray-300 mb-6">
						{specialInterests?.length && (
							<div className="flex lg:block w-full gap-3 py-3.5">
								<div className="lg:flex lg:justify-between">
									<div className="flex gap-2">
										<div className="size-5 bg-blue-200/10 flex items-center justify-center rounded-full">
											<ChevronRightIcon className="text-blue-200 size-3.5" />
										</div>
										<h3 className="text-primary-dark font-semibold text-sm">
											Special Interest
										</h3>
									</div>
									<div className="flex flex-col gap-3 mt-2 lg:mt-0">
										{specialInterests.map((interest, idx) => (
											<span key={idx} className="text-sm text-gray-500">
												{interest}
											</span>
										))}
									</div>
								</div>
							</div>
						)}
						{languages?.length && (
							<div className="flex lg:block w-full gap-3 py-3.5">
								<div className="lg:flex lg:justify-between">
									<div className="flex gap-2">
										<div className="size-5 bg-blue-200/10 flex items-center justify-center rounded-full">
											<ChevronRightIcon className="text-blue-200 size-3.5" />
										</div>
										<h3 className="text-primary-dark font-semibold text-sm">
											Language Spoken
										</h3>
									</div>
									<div className="flex flex-col gap-3 mt-2 lg:mt-0">
										<span className="text-sm text-gray-500">
											{languages.join(", ")}
										</span>
									</div>
								</div>
							</div>
						)}
						{accreditations?.length && (
							<div className="flex lg:block w-full gap-3 py-3.5">
								<div className="lg:flex lg:justify-between">
									<div className="flex gap-2">
										<div className="size-5 bg-blue-200/10 flex items-center justify-center rounded-full">
											<ChevronRightIcon className="text-blue-200 size-3.5" />
										</div>
										<h3 className="text-primary-dark font-semibold text-sm">
											Accreditations
										</h3>
									</div>
									<div className="flex flex-col gap-3 mt-2 lg:mt-0">
										<span className="text-sm text-gray-500">
											{accreditations.join(", ")}
										</span>
									</div>
								</div>
							</div>
						)}
					</div>
					<h3 className="text-left text-xl text-primary-dark font-semibold mb-3">Biography</h3>
					<div
						className="prose max-w-none text-gray-500 text-sm leading-8"
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				</div>
			</div>
		</section>
	);
}
