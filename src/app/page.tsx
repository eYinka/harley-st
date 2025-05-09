import Banner from "@/components/core/Banner";
import BannerWithSlider from "@/components/core/BannerWithSlider";
import Spacer from "@/components/core/Spacer";
import Faqs from "@/components/sections/Faqs";
import FeaturesCard from "@/components/sections/FeaturesCard";
import SocialCta from "@/components/sections/SocialCta";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Regulators from "@/components/sections/Regulators";
import ScanCategories from "@/components/sections/ScanCategories";
import Specialists from "@/components/sections/Specialists";
import Testimonials from "@/components/sections/Testimonials";
import Articles from "@/components/sections/Articles";
import ContactBanner from "@/components/core/ContactBanner";

export default function Home() {
	return (
		<>
			<Hero />
			<ScanCategories />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<FeaturesCard
				title="Exceptional Care"
				subtitle="Nothing But"
				description="<p>Reassurance and peace of mind are at the heart of everything we do. During
									your entire experience with us, you will benefit from the very best level of
									expertise & patient care.</p>"
				image="/images/private-ultrasound-clinic-london-harley-street-ultrasound.png"
				link="#"
			/>
			<Spacer mobileHeight="80px" desktopHeight="120px" />
			<Regulators />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Specialists />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Banner bgImage="/images/banner-section-bg.webp" />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Testimonials showExternalReviws />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<BannerWithSlider bgImage="/banner-section-bg-alt.webp" />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Faqs />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<ContactBanner bgImage="/images/463bfd86-harley-street-ultrasound-team-are-here-to-help-bg.png" />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Articles />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<SocialCta bgImage="/images/follow-us-on-social-media-harley-street-ultrasound.png" />
			<Footer />
		</>
	);
}
