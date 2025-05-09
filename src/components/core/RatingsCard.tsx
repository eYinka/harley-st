import Image from "next/image";

export default function RatingsCard() {
	return (
		<div className="w-fit py-4 px-3 flex justify-start items-center gap-2.5 rounded-xl z-10 bg-white lg:max-w-[330px] card-shadow">
			<div className="flex flex-col">
				<div className="w-full h-3.5 relative">
					<Image
						src="https://images.ctfassets.net/1w1x9dft88u5/3u6HIhiLsmqczmWiM7IaQ6/9f02e36b9ab5b1139565308339fe1f87/335ca75a-5-star-rating-service.png"
						alt="5 star rating service"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
						className="object-contain object-left pointer-events-none"
					/>
				</div>
				<p className="text-2xl lg:text-4xl leading-10 font-semibold text-primary-600">
					18,532
				</p>
			</div>
			<p className="text-primary-600 text-left">
				5-star service rating from satisfied patients
			</p>
		</div>
	);
}
