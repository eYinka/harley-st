import BookIcon from "../icons/BookIcon";

export default function BookingWidget() {
	return (
		<section className="container mx-auto">
			<div className="bg-[#D9EFFA] card-shadow rounded-xl p-6">
				<div className="flex items-center text-[#135269] font-bold gap-3">
					<BookIcon className="size-6" />
					<h2 className="text-lg lg:text-3xl text-primary-dark font-medium">
						Book an appointment
					</h2>
				</div>
			</div>
		</section>
	);
}
