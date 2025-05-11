import GradientTitle from "@/components/core/GradientTitle";
import TopCurve from "@/components/core/TopCurve";
import BottomCurve from "@/components/core/BottomCurve";
import BookingCard from "./BookingCard";
import MessageCard from "./MessageCard";
import CallCard from "./CallCard";
import type { Theme } from "@/types/colors";
import Image from "next/image";

interface ContactBannerProps {
	theme?: Theme;
	bgImage: string;
	bottomCurve?: boolean;
}

export default function ContactBanner(props: ContactBannerProps) {
	const { theme, bgImage, bottomCurve } = props;

	return (
		<section className="relative">
			<TopCurve />
			<div className="relative py-16">
				<Image
					src={bgImage}
					alt="Ultrasound scan images on phone and tablet harley street ultrasound"
					loading="lazy"
					fill
					className="object-cover object-right w-auto h-full"
				/>
				<div className="container max-w-[1140px] mx-auto py-10 relative">
					<GradientTitle
						subtitle="Here To Help"
						subtitleClassNames="text-3xl lg:text-4xl lg:leading-16 text-center"
						gradientType={theme}
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
						<BookingCard theme={theme} />
						<MessageCard />
						<CallCard />
					</div>
				</div>
			</div>
			{bottomCurve && <BottomCurve /> }
		</section>
	);
}
