import Image from "next/image";
import TopCurve from "@/components/core/TopCurve";
import GradientTitle from "@/components/core/GradientTitle";
import SocialIcons from "./SocialIcons";

interface SocialCtaProps {
	bgImage: string;
}

export default function SocialCta(props: SocialCtaProps) {
	const { bgImage } = props;
	return (
		<section className="relative py-20">
			<TopCurve />
			<Image
				src={bgImage}
				loading="lazy"
				alt="Follow us on social media"
				fill
				className="pointer-events-none object-cover object-top w-full h-full"
			/>
			<div className="container mx-auto min-h-[400px] relative">
				<div className="flex flex-col items-center justify-center h-full text-center mt-20">
					<GradientTitle
						title="Social Media"
						titleClassNames="text-4xl lg:text-6xl"
						subtitle="Follow Us On"
						subtitleClassNames="text-2xl lg:text-4xl lg:leading-16"
					/>
					<div className="relative mt-1 mb-10">
						<Image
							src={"/images/socialbar_linkedin.webp"}
							alt="Logo"
							width={365}
							height={100}
						/>
					</div>
					<SocialIcons dark />
				</div>
			</div>
		</section>
	);
}
