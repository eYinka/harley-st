import GradientTitle from "@/components/core/GradientTitle";
import FaqCard from "../core/FaqCard";

export default function Faqs() {
	const faqs = [
		{
			id: 1,
			title: "Refer Your Patient",
			description:
				"Referring clinicians can rely on our convenient, high quality imaging services to provide efficient and accurate ultrasound scans for their patients.",
			link: "#",
			linkText: "Clinicians",
			image: "/images/refer-your-patient-harley-street-ultrasound.png",
		},
		{
			id: 2,
			title: "Frequently Asked Questions",
			description:
				"Have more questions? See our Q&A page for more help and assistance on how we can help you to provide the clarity you need for your health.",
			link: "#",
			linkText: "FAQ Page",
			image: "/images/frequently-asked-questions-harley-street-ultrasound.png",
		},
	];

	return (
		<section className="container mx-auto">
			<GradientTitle
				subtitle="All Your Answers in One Place"
				subtitleClassNames="text-3xl lg:text-4xl lg:leading-16 text-center"
			/>
			<div className="flex flex-wrap justify-center gap-x-8 gap-y-24 pt-28">
				{faqs.map((faq) => (
					<div key={faq.id} className="lg:basis-1/3">
						<FaqCard {...faq} />
					</div>
				))}
			</div>
		</section>
	);
}
