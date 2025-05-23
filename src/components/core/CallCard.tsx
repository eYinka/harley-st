import Image from "next/image";
import { Button } from "@/components/shadcn/Button";

export default function CallCard() {
	return (
		<div className="flex flex-col justify-between rounded-2xl bg-white px-4 py-5 space-y-4 card-shadow">
			<div className="flex flex-col justify-center items-center">
				<Image
					src={"/images/book_icon.png"}
					width={100}
					height={100}
					alt=""
					className="size-16 mb-4"
				/>
				<h3 className="text-primary-dark font-medium text-2xl mb-6">Give Us a Call</h3>
				<p className="text-base lg:text-lg text-gray-500 text-center leading-loose">
					If something is unclear, give us a call directly to discuss our services.
				</p>
			</div>
			<Button
				variant="white"
				size="lg"
				className="text-lg font-medium rounded-full px-8 h-12 w-fit self-center"
			>
				0203 904 4441
			</Button>
		</div>
	);
}
