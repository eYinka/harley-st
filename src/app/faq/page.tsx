import ContactBanner from "@/components/core/ContactBanner";
import Spacer from "@/components/core/Spacer";
import FaqSections from "@/components/sections/FaqSections";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import type { Theme } from "@/types/colors";

export default function Page() {
	const pageData = {
		theme: "blue",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/127WBFixfv0mDGhGGVi4zd/80a411b1219ebe864865b90de9de034e/private-ultrasound-clinic-london-harley-street-ultrasound-bg-1.webp",
		heading: "How can we help?",
		description: `<p>Can't find the service you are looking for? or an answer to your question? </p>
          <p>We can help with anything you're not sure about. Have a look and let us know if you are still unsure by filling out a form related to your request. </p>`,
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
				<FaqSections />
				<Spacer desktopHeight="50px" mobileHeight="50px" />
				<ContactBanner bgImage="/images/463bfd86-harley-street-ultrasound-team-are-here-to-help-bg.png" />
			</main>
			<Footer />
		</>
	);
}
