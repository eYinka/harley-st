import ContactBanner from "@/components/core/ContactBanner";
import Spacer from "@/components/core/Spacer";
import DoctorsGrid from "@/components/sections/DoctorsGrid";
import PageHero from "@/components/sections/PageHero";
import Regulators from "@/components/sections/Regulators";
import { doctors } from "@/lib/data-source";
import type { Theme } from "@/types/colors";

export default function Page() {
	const pageData = {
		theme: "blue",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/127WBFixfv0mDGhGGVi4zd/80a411b1219ebe864865b90de9de034e/private-ultrasound-clinic-london-harley-street-ultrasound-bg-1.webp",
		heading: "Our Specialists",
		description: `<p>Our specialists will ensure that you experience exceptional care tailored to you keeping you informed, reassured and in safe hands.</p>`,
		pageIntro: {
			title: "Expect From Us",
			subtitle: "What You Can",
			content: `<p>We offer a wide range of Female, Children &amp; Male&nbsp;<b>Diagnostic Ultrasound Scans.</b></p>
        <p>We also perform imaging for muscular and joint injuries, and diagnostic scans for organ abnormalities. Giving you a clearer picture of what's going on.</p>
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
			<Spacer desktopHeight="50px" mobileHeight="50px" />

			<DoctorsGrid doctors={doctors} />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Regulators btnLink="#" btnText="Our Doctors" />
			<Spacer mobileHeight="80px" desktopHeight="150px" />
			<ContactBanner bgImage="/images/463bfd86-harley-street-ultrasound-team-are-here-to-help-bg.png" />
		</>
	);
}
