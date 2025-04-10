import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/shadcn/Button";

export default function Newsletter() {
	return (
		<div className="flex flex-col">
			<h4 className="text-base text-white font-semibold mb-3">Subscribe to our newsletter</h4>
			<div className="flex">
				<input
					type="email"
					placeholder="Enter your email address"
					className="w-full h-12 px-2 text-white rounded-l-xl bg-white/20 focus:outline-none"
				/>
				<Button className="bg-white hover:bg-white rounded-l-none rounded-r-xl size-12 flex flex-shrink-0">
					<ArrowRightIcon className="size-6 text-primary-dark" />
				</Button>
			</div>
		</div>
	);
}
