import Map from "@/components/core/Map";
import Spacer from "@/components/core/Spacer";
import TransportRoutes from "@/components/core/TransportRoutes";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { transportRoutes } from "@/lib/data-source";

export default function Page() {
	const pageData = {
		pageIntro: {
			title: "Travelling to Our Clinic in Harley Street",
		},
		routes: transportRoutes,
	};

	return (
		<>
			<Header />
			<main>
				<Spacer mobileHeight="80px" desktopHeight="60px" />
				<section className="grid lg:grid-cols-2 gap-10">
					<div className="px-5">
						<h1 className="text-primary-dark font-medium text-3xl max-w-[500px] lg:text-[42px] lg:leading-snug mb-6">
							{pageData?.pageIntro?.title}
						</h1>
						<TransportRoutes items={pageData.routes} />
					</div>
					<div className="lg:basis-1/2 h-[600px] lg:h-[150vh] relative">
						<Map />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
