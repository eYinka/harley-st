import ContactBanner from "@/components/core/ContactBanner";
import Spacer from "@/components/core/Spacer";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import ReferralForms from "@/components/sections/ReferralForms";
import Regulators from "@/components/sections/Regulators";
import SocialCta from "@/components/sections/SocialCta";
import Testimonials from "@/components/sections/Testimonials";
import ValuesCard from "@/components/sections/ValuesCard";
import type { Theme } from "@/types/colors";

export default function Page() {
	const pageData = {
		theme: "blue",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/127WBFixfv0mDGhGGVi4zd/80a411b1219ebe864865b90de9de034e/private-ultrasound-clinic-london-harley-street-ultrasound-bg-1.webp",
		heading: "Welcoming Clinicians to The Harley Street Ultrasound Group's Services",
		description: `
      <p>Here to provide your patients with expert opinions with the best possible care in a friendly and caring environment. </p>
      <p>We can discuss your patients results with you and can also offer suggestions for the next step in their management plans. </p>
    `,
		contact: {
			title: "Fast and simple",
			description:
				"You can use our contact form to send a request to one of our friendly, knowledgeable team. We'll get back to you with an answer as soon as possible.",
			buttonText: "Send message",
		},
		valuesCard: {
			title: "Our Values",
			subtitle: "",
			description: ` <p>The practice is fully registered and regulated with the Care Quality Commission, General Medical Council, Royal College of Surgeons and The Royal College of Radiologists.</p>
        <p>We are responsible for providing the best possible care for our patients by benchmarking ourselves and exceeding national standards and regulatory expectations.</p>`,
			image: "https://images.ctfassets.net/1w1x9dft88u5/3FUKkRihhhpXSSj2afB2mE/7c182dda33ea9ca23fd6bb7f836af62e/our-clinic-harley-street-ultrasound.png",
		},
		form: {
			title: "Referral Form",
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
				<Spacer mobileHeight="60px" desktopHeight="80px" />
				<ReferralForms title={pageData.form.title} />
				<Spacer mobileHeight="60px" desktopHeight="80px" />
				<Regulators />
				<Spacer mobileHeight="60px" desktopHeight="80px" />
				<ContactBanner
					bgImage="/images/463bfd86-harley-street-ultrasound-team-are-here-to-help-bg.png"
					bottomCurve
				/>
				<Spacer mobileHeight="80px" desktopHeight="120px" />
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
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<Testimonials />
				<Spacer mobileHeight="80px" desktopHeight="120px" />
				<SocialCta bgImage="/images/follow-us-on-social-media-harley-street-ultrasound.png" />
			</main>
			<Footer />
		</>
	);
}
