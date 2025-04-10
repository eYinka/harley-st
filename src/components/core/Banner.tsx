import GradientTitle from "@/components/core/GradientTitle";
import ScheduleFilledIcon from "@/components/icons/ScheduleFilledIcon";
import ClipboardFilledIcon from "@/components/icons/ClipboardFilledIcon";
import HealthMonitorFilledIcon from "@/components/icons/HealthMonitorFilledIcon";
import Image from "next/image";
import TopCurve from "./TopCurve";
import BottomCurve from "./BottomCurve";

export default function Banner() {
	const features = [
		{
			id: 1,
			title: "Same-Day Results",
			icon: ScheduleFilledIcon,
		},
		{
			id: 2,
			title: "Timely & Efficient",
			icon: ClipboardFilledIcon,
		},
		{
			id: 3,
			title: "Share with your Doctor",
			icon: HealthMonitorFilledIcon,
		},
	];
	return (
		<section className="relative">
			<TopCurve />
			<div className="bg-[url('/images/banner-section-bg.webp')] bg-cover bg-no-repeat bg-right relative py-16">
				<div className="container mx-auto xl:px-14 xl:mx-0 py-10">
					<div className="flex flex-col xl:w-1/2">
						<GradientTitle
							title="At your fingertips"
							titleClassNames="text-4xl lg:text-6xl"
							subtitle="Seamless, Secure,"
							subtitleClassNames="text-2xl lg:text-4xl lg:leading-16"
						/>
						<p className="text-xl text-gray-500 tracking-wide leading-loose mt-10">
							We can provide scan images directly to your smartphone, often on the
							same day following your appointment. Gain the peace of mind and insight
							you need, without delay.
						</p>
						<div className="grid grid-cols-3 gap-8 mt-10">
							{features.map((feature) => (
								<div key={feature.id}>
									<feature.icon className="size-16 mb-5" />
									<p className="text-lg lg:text-xl font-medium text-primary-dark max-w-28">
										{feature.title}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="absolute right-0 top-12 h-full w-full max-w-1/3 hidden lg:block">
					<div className="relative h-full w-auto">
						<Image
							src="/images/ultrasound-scan-images-on-phone-and-tablet-harley-street-ultrasound.webp"
							alt="Ultrasound scan images on phone and tablet harley street ultrasound"
							loading="lazy"
							fill
							className="object-cover object-left w-auto h-full"
						/>
					</div>
				</div>
			</div>
			<BottomCurve />
		</section>
	);
}
