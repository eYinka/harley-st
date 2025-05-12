import BookingWidget from "@/components/booking/BookingWidget";
import SectionIntro from "@/components/core/SectionIntro";
import ServiceTabs from "@/components/sections/ServiceTabs";
import Spacer from "@/components/core/Spacer";
import PageHero from "@/components/sections/PageHero";
import Faqs from "@/components/sections/Faqs";
import SocialCta from "@/components/sections/SocialCta";
import Regulators from "@/components/sections/Regulators";
import Specialists from "@/components/sections/Specialists";
import Testimonials from "@/components/sections/Testimonials";
import Articles from "@/components/sections/Articles";
import ContactBanner from "@/components/core/ContactBanner";
import Banner from "@/components/core/Banner";
import BannerWithSlider from "@/components/core/BannerWithSlider";
import FeaturesCard from "@/components/sections/FeaturesCard";
import { pageContent } from "@/lib/data-source";
import { notFound } from "next/navigation";
import type { Theme } from "@/types/colors";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function Page(props: PageProps) {
	const { params } = props;

	const { slug } = await params;
	const pageData = pageContent.find((page) => page.slug === slug);
	const theme = pageData?.theme as Theme; // TODO: Figure out if we need to manually pass theme around or if we should pop it in a page context

	if (!pageData) {
		return notFound();
	}

	// TODO: Ensure to implement page title and meta tags

	return (
		<>
			<PageHero
				theme={theme}
				bgImage={pageData.bgImage}
				heroImage={pageData.heroImage}
				heroImageAlt={pageData.heroImageAlt}
				heading={pageData.heading}
				subheading={pageData.subheading}
				description={pageData.description}
				price={pageData.price}
				showLocation={true}
			/>
			<main>
				<Spacer desktopHeight={"50px"} mobileHeight="50px" />
				<SectionIntro
					title={pageData?.pageIntro?.title}
					subtitle={pageData?.pageIntro?.subtitle}
					content={pageData?.pageIntro?.content}
					theme={theme}
				/>
				<Spacer desktopHeight="20px" mobileHeight="20px" />
				<ServiceTabs services={pageData.services} theme={theme} />
				<Spacer desktopHeight="96px" mobileHeight="40px" />
				<BookingWidget />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<FeaturesCard
					title={pageData?.featuresCard?.title}
					subtitle={pageData?.featuresCard?.subtitle}
					description={pageData?.featuresCard?.description}
					image={pageData?.featuresCard?.image}
					theme={theme}
					link="#"
				/>
				<Spacer mobileHeight="80px" desktopHeight="120px" />
				<Regulators />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<Specialists theme={theme} />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<Banner bgImage={pageData.bannerImage} theme={theme} />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<Testimonials theme={theme} />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<BannerWithSlider bgImage={pageData.bannerImage} theme={theme} />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<Faqs theme={theme} />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<ContactBanner theme={theme} bgImage={pageData.bannerImage} bottomCurve />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<Articles theme={theme} />
				<Spacer mobileHeight="80px" desktopHeight="100px" />
				<SocialCta bgImage={pageData.socialCtaImage} />
			</main>
		</>
	);
}
