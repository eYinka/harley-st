import { Button } from "@/components/shadcn/Button";
import SearchIcon from "../icons/SearchIcon";

export default function ScanSearch() {
	return (
		<div className="bg-white backdrop-blur-sm p-4 rounded-xl search-shadow">
			<div className="flex ">
				<input
					placeholder="Find a Scan"
					className="outline-none w-full bg-white h-16 p-4 placeholder:text-sm placeholder:font-medium placeholder:text-gray-400 rounded-l-xl search-shadow"
				/>
				<Button className="bg-[#26a6cd] hover:bg-[#26a6cd] rounded-l-none rounded-r-xl size-16 flex flex-shrink-0">
					<SearchIcon className="size-7" />
				</Button>
			</div>
		</div>
	);
}
