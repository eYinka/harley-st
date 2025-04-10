import Image from "next/image";
import GradientButton from "./GradientButton";

export default function BookingCard() {
	return (
		<div className="flex flex-col justify-center items-center rounded-2xl bg-white px-4 py-5 space-y-4 card-shadow">
			<Image
				src={"/images/book_icon.png"}
				width={100}
				height={100}
				alt=""
				className="size-16"
			/>
			<h3 className="text-primary-dark font-medium text-2xl">Book Online </h3>
			<p className="text-base lg:text-lg text-gray-500 text-center leading-loose">
				Use our easy and hassle-free booking platform to make an appointment and get a
				confirmation in seconds.
			</p>
      <GradientButton text={"Book Online"} />
		</div>
	);
}
