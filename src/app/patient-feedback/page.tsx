import ContactBanner from "@/components/core/ContactBanner";
import SectionIntro from "@/components/core/SectionIntro";
import Spacer from "@/components/core/Spacer";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import Regulators from "@/components/sections/Regulators";
import type { Theme } from "@/types/colors";

export default function Page() {
	const pageData = {
		theme: "blue",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/127WBFixfv0mDGhGGVi4zd/80a411b1219ebe864865b90de9de034e/private-ultrasound-clinic-london-harley-street-ultrasound-bg-1.webp",
		heading: "Feedback & Suggestions",
		description: "",
		pageIntro: {
			title: "",
			subtitle: "Your feedback is important to us",
			content: `<p>At Harley Street Ultrasound, we take patient feedback very seriously. If you have had any issues at any of our clinics, please give us a moment of your time by filling out the survey below and we will be sure to get back to you as soon as we can.</p>
        `,
		},
	};

	const theme = pageData.theme as Theme;
	return (
		<>
			<PageHero
				theme={theme}
				bgImage={pageData.bgImage}
				heading={pageData.heading}
				description={pageData.description}
			/>
			<main>
				<Spacer desktopHeight="50px" mobileHeight="50px" />
				<SectionIntro
					title={pageData?.pageIntro?.title}
					subtitle={pageData?.pageIntro?.subtitle}
					content={pageData?.pageIntro?.content}
					theme={theme}
				/>
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<Regulators btnLink="#" btnText="Our Doctors" />
				<Spacer mobileHeight="80px" desktopHeight="150px" />
				<ContactBanner bgImage="/images/463bfd86-harley-street-ultrasound-team-are-here-to-help-bg.png" />
			</main>
			<Footer />
		</>
	);
}
