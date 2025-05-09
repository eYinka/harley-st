import Image from "next/image";
import GradientButton from "./GradientButton";
import type { Theme } from "@/types/colors";

interface BookingCardProps {
	theme?: Theme;
}

export default function BookingCard(props: BookingCardProps) {
	const { theme } = props;
	return (
		<div className="flex flex-col justify-between rounded-2xl bg-white px-4 py-5 space-y-4 card-shadow">
			<div className="flex flex-col justify-center items-center mb-6">
				<Image
					src={"/images/book_icon.png"}
					width={100}
					height={100}
					alt=""
					className="size-16 mb-4"
				/>
				<h3 className="text-primary-dark font-medium text-2xl mb-4">Book Online </h3>
				<p className="text-base lg:text-lg text-gray-500 text-center leading-loose">
					Use our easy and hassle-free booking platform to make an appointment and get a
					confirmation in seconds.
				</p>
			</div>
			<GradientButton text={"Book Online"} theme={theme} classNames="w-fit self-center"/>
		</div>
	);
}
