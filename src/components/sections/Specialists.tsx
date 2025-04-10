"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import GradientTitle from "@/components/core/GradientTitle";
import DoctorCard from "@/components/core/DoctorCard";
import "swiper/css";
import "swiper/css/pagination";

export default function Specialists() {
	const team = [
		{
			id: 1,
			name: "Dr Ahmed Shah",
			title: "FRCR, MBBS, BSc",
			bio: "Dr Ahmed Shah is a Consultant Breast and General Radiologist, offering a wide range of ultrasound scans and procedures at 99 Harley Street.",
			image: "/images/specialists/our-specialists-ahmed-shah.png",
			link: "#",
		},
		{
			id: 2,
			name: "Ms Heba Alkutbi",
			title: "BSc, PGc",
			bio: "Heba Alkutbi ( BSc PGc ) a senior sonographer with over 17 years scanning experience. Heba completed her BSc in Diagnostic Radiography at St Georges Medical School in 2004.",
			image: "/images/specialists/our-specialists-ms-heba-alkutbi.png",
			link: "#",
		},
		{
			id: 3,
			name: "Dr Hussain Amin",
			title: "MBBS BSc MRCS FRCR",
			bio: "Dr. Hussain Amin is a Consultant Radiologist at University College of London Hospital with a specialist interest in breast, oncology and general radiology.",
			image: "/images/specialists/our-specialists-hussain-amin.png",
			link: "#",
		},
		{
			id: 4,
			name: "Dr Ayman Mahfouz",
			title: "MBBS, FRCR",
			bio: "Dr. Ayman Mahfouz is a Consultant Radiologist at University College of London Hospital (UCLH), his specialist expertise include breast, gynaecology and general radiology imaging.",
			image: "/images/specialists/our-specialists-ayman-mahfouz.webp",
			link: "#",
		},
		{
			id: 5,
			name: "Dr Nikhil Patel",
			title: "MBBS, FRCR, BSc(Hons)",
			bio: "Dr Nikhil R Patel is a Consultant Radiologist at King's College Hospital NHS Foundation Trust and specialises in musculoskeletal imaging.",
			image: "/images/specialists/our-specialists-nikhil-patel.png",
			link: "#",
		},
		{
			id: 6,
			name: "Dr Kate Hawtin",
			title: "MA, MBBS, FRCR",
			bio: "Dr. Kate Hawtin qualified from Cambridge University and Imperial College School of Medicine in 2000, graduating with distinction.",
			image: "/images/specialists/our-specialists-kate-hawtin.webp",
			link: "#",
		},
	];

	return (
		<section>
			<div className="container mx-auto flex flex-col items-center justify-center ">
				<GradientTitle
					title="Team of Specialists"
					subtitle="Meet Our"
					titleClassNames="text-center text-3xl lg:text-5xl leading-14"
					subtitleClassNames="text-center text-2xl lg:text-3xl"
				/>
				<div className="max-w-[930px]">
					<p className="text-xl text-primary-dark mt-4 tracking-wide mb-4">
						The team at Harley Street Ultrasound Group is made up of{" "}
						<strong>Specialist </strong> Consultants and{" "}
						<strong>Specialist Sonographers</strong> you can rely upon. They are among
						the best in the industry.
					</p>
					<p className="text-xl text-primary-dark mt-4 tracking-wide">
						This is backed up with a full range of qualifications and accreditations.
						All of our specialists are fully registered with all applicable medical
						regulatory bodies.
					</p>
				</div>
			</div>
			<div className="flex justify-center bg-white pr-3">
				<Swiper
					modules={[Autoplay, Pagination]}
					spaceBetween={"50"}
					slidesPerView={"auto"}
					loop={true}
					speed={1000}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
				>
					{team.map((member) => (
						<SwiperSlide key={member.id} className="w-full max-w-[330px] py-16">
							<DoctorCard {...member} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
