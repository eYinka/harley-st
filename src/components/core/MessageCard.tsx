import Image from "next/image";
import { Button } from "@/components/shadcn/Button";

export default function MessageCard() {
	return (
		<div className="flex flex-col justify-center items-center rounded-2xl bg-white px-4 py-5 space-y-4 card-shadow">
			<Image
				src={"/images/book_icon.png"}
				width={100}
				height={100}
				alt=""
				className="size-16"
			/>
			<h3 className="text-primary-dark font-medium text-2xl">Send Us a Message </h3>
			<p className="text-base lg:text-lg text-gray-500 text-center leading-loose">
				Do not hesitate to reach out by writing to us. Use our online form to send us your
				queries.
			</p>
			<Button
				variant="white"
				size="lg"
				className="text-lg font-medium rounded-full px-8 h-12"
			>
				Send a Message
			</Button>
		</div>
	);
}
