import GradientTitle from "@/components/core/GradientTitle";
import TopCurve from "@/components/core/TopCurve";
import BottomCurve from "@/components/core/BottomCurve";
import BookingCard from "./BookingCard";
import MessageCard from "./MessageCard";
import CallCard from "./CallCard";

export default function ContactBanner() {
	return (
		<section className="relative">
			<TopCurve />
			<div className="bg-[url('/images/463bfd86-harley-street-ultrasound-team-are-here-to-help-bg.png')] bg-cover bg-no-repeat bg-right relative py-16">
				<div className="container max-w-[1140px] mx-auto py-10">
					<GradientTitle
						subtitle="Here To Help"
						subtitleClassNames="text-3xl lg:text-4xl lg:leading-16 text-center"
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
						<BookingCard />
            <MessageCard />
            <CallCard />
					</div>
				</div>
			</div>
			<BottomCurve />
		</section>
	);
}
