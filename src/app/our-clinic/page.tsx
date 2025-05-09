import ContactBanner from "@/components/core/ContactBanner";
import Spacer from "@/components/core/Spacer";
import Articles from "@/components/sections/Articles";
import Faqs from "@/components/sections/Faqs";
import PageHero from "@/components/sections/PageHero";
import Regulators from "@/components/sections/Regulators";
import SocialCta from "@/components/sections/SocialCta";
import Specialists from "@/components/sections/Specialists";
import ValuesCard from "@/components/sections/ValuesCard";
import type { Theme } from "@/types/colors";

export default function Page() {
	const pageData = {
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/127WBFixfv0mDGhGGVi4zd/80a411b1219ebe864865b90de9de034e/private-ultrasound-clinic-london-harley-street-ultrasound-bg-1.webp",
		heading: "Our Clinic",
		description: `<p>We combine a comfortable environment with modern medical equipment, allowing a range of tests and treatments to be carried out on site.</p>
      <p>The practice is fully registered and regulated with the Care Quality Commission, General Medical Council, Royal College of Surgeons and The Royal College of Radiologists.</p>
      `,
		theme: "blue",
		valuesCard: {
			title: "Our Values",
			subtitle: "",
			description: ` <p>The practice is fully registered and regulated with the Care Quality Commission, General Medical Council, Royal College of Surgeons and The Royal College of Radiologists.</p>
      <p>We are responsible for providing the best possible care for our patients by benchmarking ourselves and exceeding national standards and regulatory expectations.</p>`,
			image: "https://images.ctfassets.net/1w1x9dft88u5/3FUKkRihhhpXSSj2afB2mE/7c182dda33ea9ca23fd6bb7f836af62e/our-clinic-harley-street-ultrasound.png",
		},
		bannerImage: "/images/463bfd86-harley-street-ultrasound-team-are-here-to-help-bg.png",
		socialCtaImage: "/images/follow-us-on-social-media-harley-street-ultrasound.png",
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
			<ValuesCard
				title={pageData.valuesCard.title}
				subtitle={pageData.valuesCard.subtitle}
				description={pageData.valuesCard.description}
				image={pageData.valuesCard.image}
				theme={theme}
				link="/our-clinic/our-values"
				showReviews
				showFeatures
			/>
			<Spacer desktopHeight="50px" mobileHeight="50px" />
			<Specialists theme={theme} />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Regulators />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Faqs theme={theme} />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<ContactBanner theme={theme} bgImage={pageData.bannerImage} />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Articles theme={theme} />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<SocialCta bgImage={pageData.socialCtaImage} />
		</>
	);
}
