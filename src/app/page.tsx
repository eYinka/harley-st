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
			<FeaturesCard />
			<Spacer mobileHeight="80px" desktopHeight="120px" />
			<Regulators />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Specialists />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Banner />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Testimonials />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<BannerWithSlider />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Faqs />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<ContactBanner />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<Articles />
			<Spacer mobileHeight="80px" desktopHeight="100px" />
			<SocialCta />
			<Footer />
		</>
	);
}
