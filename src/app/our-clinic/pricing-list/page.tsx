import Spacer from "@/components/core/Spacer";
import ContactBanner from "@/components/core/ContactBanner";
import PageHero from "@/components/sections/PageHero";
import type { Theme } from "@/types/colors";
import RichText from "@/components/core/RichText";
import PriceLists from "@/components/sections/PriceLists";

export default async function Page() {
	const pageData = {
		theme: "blue",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/127WBFixfv0mDGhGGVi4zd/80a411b1219ebe864865b90de9de034e/private-ultrasound-clinic-london-harley-street-ultrasound-bg-1.webp",
		heading: "Pricing List",
		description: "",
		pageIntro: {
			content: `<p>View the prices of our&nbsp;<b>full range of services</b>. Prices shown are inclusive of all fees.</p>`,
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
				<Spacer desktopHeight={"100px"} mobileHeight="70px" />
				<div className="container mx-auto">
					<RichText
						content={pageData.pageIntro.content}
						classNames="text-primary-dark text-xl text-center"
					/>
				</div>
				<Spacer desktopHeight={"50px"} mobileHeight="50px" />
				<PriceLists />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<ContactBanner bgImage="/images/463bfd86-harley-street-ultrasound-team-are-here-to-help-bg.png" />
			</main>
		</>
	);
}
