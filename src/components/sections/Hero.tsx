import Header from "@/components/layout/Header";
import ScanSearch from "../core/ScanSearch";

export default function Hero() {
	return (
		<div className="w-full relative pb-10 bg-[url('/images/hero-bg.webp')] bg-cover bg-bottom bg-no-repeat">
			<Header />
			<div className="container mx-auto pt-24 pb-20 md:pt-28 md:py-40">
				<div className="flex flex-col items-center justify-center text-center">
					<h1 className="text-primary-dark font-medium leading-12">
						<span className="text-4xl lg:text-5xl">Full Range of </span> <br />
						<span className="text-5xl lg:text-6xl gradient_bg text-transparent bg-clip-text">
							Ultrasound Scans <br />
						</span>{" "}
						<span className="text-3xl">for Private Diagnostics </span>
					</h1>
					<div className="max-w-9/12 lg:max-w-[830px]">
						<p className="text-xl lg:text-2xl text-gray-500 leading-8 lg:leading-10 mt-4">
							<strong>Private Ultrasound Scans</strong> performed by{" "}
							<strong>Specialist Consultant Doctors</strong> and{" "}
							<strong>Specialist Senior Sonographers</strong> that actively practice
							their specialities at leading hospitals in the UK, providing you with
							the highest level of care.
						</p>
					</div>
				</div>
			</div>
			<div className="absolute top-11/12 w-full">
				<div className="w-11/12 md:w-full max-w-[830px] mx-auto">
					<ScanSearch />
				</div>
			</div>
		</div>
	);
}
