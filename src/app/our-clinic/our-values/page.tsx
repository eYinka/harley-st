import BannerAlt from "@/components/core/BannerAlt";
import SectionIntro from "@/components/core/SectionIntro";
import Spacer from "@/components/core/Spacer";
import CoreValues from "@/components/sections/CoreValues";
import PageHero from "@/components/sections/PageHero";
import Regulators from "@/components/sections/Regulators";
import SocialCta from "@/components/sections/SocialCta";
import ValueFeatureGrid from "@/components/sections/ValueFeatureGrid";
import ValuesCard from "@/components/sections/ValuesCard";
import type { Theme } from "@/types/colors";

export default function Page() {
	const pageData = {
		theme: "blue",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/127WBFixfv0mDGhGGVi4zd/80a411b1219ebe864865b90de9de034e/private-ultrasound-clinic-london-harley-street-ultrasound-bg-1.webp",
		heading: "Our Values",
		description: `<p>We combine a comfortable environment with modern medical equipment, allowing a range of tests and treatments to be carried out on site.</p>
      <p>The practice is fully registered and regulated with the Care Quality Commission, General Medical Council, Royal College of Surgeons and The Royal College of Radiologists.</p>
      `,
		pageIntro: {
			title: "Expect From Us",
			subtitle: "What You Can",
			content: `<p>We offer a wide range of Female, Children &amp; Male&nbsp;<b>Diagnostic Ultrasound Scans.</b></p>
        <p>We also perform imaging for muscular and joint injuries, and diagnostic scans for organ abnormalities. Giving you a clearer picture of what's going on.</p>
        `,
		},
		valuesCard: {
			title: "",
			subtitle: "Our Priority is You",
			description: `<p>At Harley Street Ultrasound Group, your health is, and always will be, our top priority. So, what can you expect from the team if you&nbsp;choose us?</p>
      <p>A team of doctors and surgeons committed to offering world-class diagnostic imaging and treatment services to each and every patient.</p>
      <p>Whether you need a simple joint scan or a comprehensive health check, we always tailor our services to meet your individual requirements.</p>
      `,
			image: "https://images.ctfassets.net/1w1x9dft88u5/3Fina5klUDX3n0uXVCudIO/bb50ee573abe25a543076095d83d1ea3/our-values-harley-street-ultrasound.png",
		},
		socialCtaImage: "/images/follow-us-on-social-media-harley-street-ultrasound.png",
		bannerTitle: "What Makes Us Different",
		banner: {
			title: "What Makes Us Different",
			background:
				"https://images.ctfassets.net/1w1x9dft88u5/2jK20gEqyjkeWbfsslkV1d/29afdfc6e759ee6e082ba4a73af11ed9/3e7b0154-bg-what-makes-us-different-1.jpg",
			image: "https://images.ctfassets.net/1w1x9dft88u5/3S6IHrz0kja9PkFRxHhMU1/a08226e58a76931fc25f640d2d97e016/our-values-harley-street-ultrasound-2.png",
			content: `<p>What sets us apart from other clinics is the highly personalised treatment services on offer. There's no such thing as a one-size-fits-all approach to healthcare, and we tailor our services to your specific requirements.</p>
        <p>What's more, our doctors and surgeons are experts in their particular field of medicine, which means you will only ever see a niche specialist. This way, you will always get an accurate diagnosis.</p>
      `,
		},
		coreValues: {
			title: "Core Values",
			content: `<p>Everything we do is all about you. Treating every patient with compassion, care, and integrity. We strive to deliver the safest possible treatment experience for everyone.</p>
        <p>Our philosophy is simple – our patients matter, which is why we uphold the values that we do.</p>
      `,
			values: [
				{
					id: 1,
					title: "Professionalism",
					description: `
              <p>Since patients are our priority, we abide by the highest levels of professionalism at all times.</p>
              <p>From your first appointment to any follow-ups, you can expect honesty, confidentiality, and reliability from everyone on the team.</p>
            `,
				},
			],
		},
		valuesGrid: [
			{
				title: "A Comfortable & Painless Ultrasound",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1iZdEGyM4SocGiqqlSMOd7/54bc47d588caa17bb4c30e3b5b080197/52c29ae2-icon-comfortable-painless-ultrasound-1.png",
			},
			{
				title: "Scans Performed by Specialists",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1pKsrdxuGMPRavB4i8Cq8M/51b22eac937e020c0850998eee5634f3/ad7ce64a-icon-specialist-consultant-appointments-1.png",
			},
			{
				title: "Same-Day Results",
				image: "https://images.ctfassets.net/1w1x9dft88u5/4MGu4aYyBx8z3aHDGfS4we/ed217ef48dc879b323a1ff45a0ec9fe7/40a19a82-icon-same-day-results-1.png",
			},
			{
				title: "Expert Care & Advice",
				image: "https://images.ctfassets.net/1w1x9dft88u5/4CrRGIYHJ68gBoMM2Xa316/83b7685e3e6aba235c04e8c6a4433cd4/d9f9274a-icon-expert-care-and-advice-1.png",
			},
		],
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
			/>
			<Spacer desktopHeight="60px" mobileHeight="60px" />
			<SectionIntro
				title={pageData?.pageIntro?.title}
				subtitle={pageData?.pageIntro?.subtitle}
				content={pageData?.pageIntro?.content}
				theme={theme}
			/>
			<Spacer desktopHeight="40px" mobileHeight="20px" />
			<ValueFeatureGrid items={pageData.valuesGrid} />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<BannerAlt
				title={pageData?.bannerTitle}
				content={pageData?.banner.content}
				image={pageData?.banner.image}
				bgImage={pageData?.banner.background}
			/>
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Regulators btnLink="#" btnText="Our Doctors" />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<CoreValues {...pageData.coreValues} />
			<Spacer mobileHeight="80px" desktopHeight="150px" />
			<SocialCta bgImage={pageData.socialCtaImage} />
		</>
	);
}
