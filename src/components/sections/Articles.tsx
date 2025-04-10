import GradientTitle from "@/components/core/GradientTitle";
import ArticleCard from "../core/ArticleCard";
import GradientButton from "../core/GradientButton";
import Link from "next/link";

export default function Articles() {
	const articles = [
		{
			id: 1,
			title: "What is a Breast Consultation?",
			description:
				"Understanding Breast Consultations: Your Guide to Breast Health Your breasts are a vital part of your health, and taking proactive steps to ensure their well-being is essential. A breast consultation can be a valuable tool in achieving this goal.",
			image: "/images/breast-consultation-examination-private-clinic-harley-street-ultrasound.webp",
			author: "Dr Ayman Mahfouz",
			date: "July 31, 2024",
			link: "#",
		},
		{
			id: 2,
			title: "Anomaly Scan / Anatomy Scan: What should you expect?",
			description:
				"Pregnancy is a journey filled with moments of joy and anticipation, and the anomaly scan—or anatomy scan—is a significant and exciting milestone. This article will guide you through what an anomaly scan is, what to expect during the procedure, the findings you might encounter, and how to interpret the results.",
			image: "/images/anomaly-scan-anatomy-scan-expectations-ultrasound-harley-street-ultrasound.webp",
			author: "Heba Alkutbi",
			date: "February 08, 2024",
			link: "#",
		},
		{
			id: 3,
			title: "Dating Scan / 12 Week Scan: What should you expect?",
			description:
				"At 12 weeks, the countdown to meeting your little one officially begins! This important prenatal scan marks your first chance to peek into their tiny world, revealing exciting details and addressing any early concerns.",
			image: "/images/12-week-dating-scan-appointment-calendar-note-harley-street-ultrasound.webp",
			author: "Heba Alkutbi",
			date: "February 01, 2024",
			link: "#",
		},
		{
			id: 4,
			title: "What is a Breast Consultation?",
			description:
				"Understanding Breast Consultations: Your Guide to Breast Health Your breasts are a vital part of your health, and taking proactive steps to ensure their well-being is essential. A breast consultation can be a valuable tool in achieving this goal.",
			image: "/images/breast-consultation-examination-private-clinic-harley-street-ultrasound.webp",
			author: "Dr Ayman Mahfouz",
			date: "July 31, 2024",
			link: "#",
		},
		{
			id: 5,
			title: "Anomaly Scan / Anatomy Scan: What should you expect?",
			description:
				"Pregnancy is a journey filled with moments of joy and anticipation, and the anomaly scan—or anatomy scan—is a significant and exciting milestone. This article will guide you through what an anomaly scan is, what to expect during the procedure, the findings you might encounter, and how to interpret the results.",
			image: "/images/anomaly-scan-anatomy-scan-expectations-ultrasound-harley-street-ultrasound.webp",
			author: "Heba Alkutbi",
			date: "February 08, 2024",
			link: "#",
		},
		{
			id: 6,
			title: "Dating Scan / 12 Week Scan: What should you expect?",
			description:
				"At 12 weeks, the countdown to meeting your little one officially begins! This important prenatal scan marks your first chance to peek into their tiny world, revealing exciting details and addressing any early concerns.",
			image: "/images/12-week-dating-scan-appointment-calendar-note-harley-street-ultrasound.webp",
			author: "Heba Alkutbi",
			date: "February 01, 2024",
			link: "#",
		},
	];

	return (
		<section className="container mx-auto">
			<div className="max-w-[800px] mx-auto">
				<GradientTitle subtitle="Latest Articles" subtitleClassNames="text-3xl" />
				<p className="text-xl text-gray-500 tracking-wide leading-loose mt-4">
					We provide insight on a range of topics, including the latest news affecting our
					practice.
				</p>
			</div>
			<div className="sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-24 pt-28 max-w-[1140px] mx-auto">
				{articles.map((article) => (
					<ArticleCard key={article.id} {...article} />
				))}
			</div>
			<div className="flex justify-center mt-16">
				<Link href={"#"}>
					<GradientButton text="Show More" />
				</Link>
			</div>
		</section>
	);
}
