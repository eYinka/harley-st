import Spacer from "@/components/core/Spacer";
import ContactBanner from "@/components/core/ContactBanner";
import { doctors } from "@/lib/data-source";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import DoctorProfile from "@/components/core/DoctorProfile";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function Page(props: PageProps) {
	const { params } = props;

	const { slug } = await params;
	const pageData = doctors.find((item) => item.slug === slug);

	if (!pageData) {
		return notFound();
	}

	return (
		<>
			<Header />
			<main>
				<Spacer desktopHeight={"50px"} mobileHeight="50px" />
				<DoctorProfile profile={pageData} />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<ContactBanner bgImage="/images/463bfd86-harley-street-ultrasound-team-are-here-to-help-bg.png" />
			</main>
		</>
	);
}
