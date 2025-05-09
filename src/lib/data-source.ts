// TODO: Extract Types to a separate file when CMS decision is made

export type CompactService = {
	id: number;
	name: string;
	image?: string;
	link: string;
};

export type FullService = {
	subtitle: string;
	features: string[];
	price: string;
	price_subtitle?: string;
	button_text: string;
} & CompactService;

export type ServiceItem = CompactService | FullService;
export type ServiceCardType = "compact" | "full";
export type Service = {
	slug: string;
	label: string;
	icon: string;
	card_type: ServiceCardType;
	items: ServiceItem[];
};

export const femaleServices: Service[] = [
	{
		slug: "general",
		label: "General",
		icon: "CatFemaleIcon",
		card_type: "compact",
		items: [
			{
				id: 1,
				name: "Ovarian Screening",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 2,
				name: "Lumps & Bumps",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 3,
				name: "Breast Ultrasound",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 4,
				name: "Armpit / Axilla",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 5,
				name: "Neck",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 6,
				name: "Thyroid",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 7,
				name: "Hernia",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 8,
				name: "Liver and Gallbladder",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 9,
				name: "Kidney and Urinary Tract",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 10,
				name: "Abdomen",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 11,
				name: "Pelvic",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 12,
				name: "Abdomen & Pelvic",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 13,
				name: "Deep Vein Thrombosis Doppler Ultrasound",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 14,
				name: "Abdominal Aortic Aneurysm AAA Screening",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 15,
				name: "Female health check",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
		],
	},
	{
		slug: "pregnancy",
		label: "Pregnancy",
		icon: "CatPregnancyIcon",
		card_type: "compact",
		items: [
			{
				id: 1,
				name: "Early Pregnancy Scan | 6 - 10 Weeks",
				image: "https://images.ctfassets.net/1w1x9dft88u5/7M3I3otzu3mWUNmu2O7238/d495bc04d0230fb74263957a4b3bc2b5/1.webp",
				link: "#",
			},
			{
				id: 2,
				name: "Non Invasive Prenatal Test - NIPT | From 10 - 40 Weeks",
				image: "https://images.ctfassets.net/1w1x9dft88u5/7M3I3otzu3mWUNmu2O7238/d495bc04d0230fb74263957a4b3bc2b5/1.webp",
				link: "#",
			},
			{
				id: 3,
				name: "Dating Scan | From 10 - 15 Weeks",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1KvR124kW6fzXelndu9yah/da616f70560536b92a6b236756ff6c5c/3.webp",
				link: "#",
			},
			{
				id: 4,
				name: "Gender & Foetal Wellbeing | From 16 - 18 Weeks",
				image: "https://images.ctfassets.net/1w1x9dft88u5/38RyvunOo3iGtiUh3qeT40/302d0b4f888e500af619ef7bf105f888/4.webp",
				link: "#",
			},
			{
				id: 5,
				name: "Anatomy / Anomaly  Scan | From 18 - 24 Weeks",
				image: "https://images.ctfassets.net/1w1x9dft88u5/PkeYi1s9okCdc5kwg7Ukg/ddc1393362cc0f3579784cceb2a427ed/5.webp",
				link: "#",
			},
			{
				id: 6,
				name: "Growth Scan | From 24 - 40 Weeks",
				image: "https://images.ctfassets.net/1w1x9dft88u5/6XdMTZnU6z1dchMXHMaNvX/4048dfa704726315c664d5d5afcd5e15/6.webp",
				link: "#",
			},
		],
	},
	{
		slug: "breast_clinic",
		label: "Breast Clinic",
		icon: "CatBreastIcon",
		card_type: "full",
		items: [
			{
				id: 1,
				name: "Complete Breast Assessment",
				subtitle: "Breast Specialist Doctor & Breast Specialist Imaging Doctor",
				features: [
					"Breast Specialist Doctor Assessment",
					"Ultrasound with Breast Imaging Specialist Doctor",
					"Review Your Clinical History and Risk Factors",
					"Examination of Both Breast & Armpits",
					"Supplemental Breast Screening",
					"Identify Cysts, Masses, Tumours, and Infection",
					"Comprehensive Report of Assessment and Findings",
					"One to One Education & Management Plan Advice",
				],
				price: "£550",
				price_subtitle: "All Fees Inclusive",
				button_text: "Learn More",
				link: "#",
			},
			{
				id: 2,
				name: "Breast Ultrasound",
				subtitle: "Armpit / Axilla Included",
				features: [
					"Breast Specialist Doctor Assessment",
					"Ultrasound with Breast Imaging Specialist Doctor",
					"Review Your Clinical History and Risk Factors",
					"Examination of Both Breast & Armpits",
					"Supplemental Breast Screening",
					"Identify Cysts, Masses, Tumours, and Infection",
				],
				price: "£350",
				price_subtitle: "All Fees Inclusive",
				button_text: "Learn More",
				link: "#",
			},
			{
				id: 3,
				name: "Breast Consultation",
				subtitle: "Ultrasound Not Included",
				features: [
					"Breast Specialist Doctor Assessment",
					"Ultrasound with Breast Imaging Specialist Doctor",
					"Review Your Clinical History and Risk Factors",
					"Examination of Both Breast & Armpits",
					"Supplemental Breast Screening",
					"Identify Cysts, Masses, Tumours, and Infection",
				],
				price: "£350",
				price_subtitle: "All Fees Inclusive",
				button_text: "Learn More",
				link: "#",
			},
			{
				id: 4,
				name: "Breast Lumps & Bumps",
				subtitle: "Breast Ultrasound",
				features: [
					"Breast Specialist Doctor Assessment",
					"Ultrasound with Breast Imaging Specialist Doctor",
					"Review Your Clinical History and Risk Factors",
					"Examination of Both Breast & Armpits",
					"Supplemental Breast Screening",
					"Identify Cysts, Masses, Tumours, and Infection",
				],
				price: "£350",
				price_subtitle: "All Fees Inclusive",
				button_text: "Learn More",
				link: "#",
			},
			{
				id: 5,
				name: "Breast Implant Check",
				subtitle: "Armpit / Axilla Included",
				features: [
					"Breast Specialist Doctor Assessment",
					"Ultrasound with Breast Imaging Specialist Doctor",
					"Review Your Clinical History and Risk Factors",
					"Examination of Both Breast & Armpits",
					"Supplemental Breast Screening",
					"Identify Cysts, Masses, Tumours, and Infection",
				],
				price: "£350",
				price_subtitle: "All Fees Inclusive",
				button_text: "Learn More",
				link: "#",
			},
		],
	},
];

export const maleServices: Service[] = [
	{
		slug: "general",
		label: "General",
		icon: "CatMaleIcon",
		card_type: "compact",
		items: [
			{
				id: 1,
				name: "Ovarian Screening",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 2,
				name: "Lumps & Bumps",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 3,
				name: "Breast Ultrasound",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 4,
				name: "Armpit / Axilla",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
		],
	},
];

export const muscleServices: Service[] = [
	{
		slug: "muscles_joints",
		label: "Muscles & Joints",
		icon: "CatMuscleIcon",
		card_type: "compact",
		items: [
			{
				id: 1,
				name: "Ovarian Screening",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 2,
				name: "Lumps & Bumps",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 3,
				name: "Breast Ultrasound",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
			{
				id: 4,
				name: "Armpit / Axilla",
				image: "https://images.ctfassets.net/1w1x9dft88u5/1QO9ZaNVbW8RGKkYAJgI3i/7b30a0fdb6eef70898d0684020a64337/2.webp",
				link: "#",
			},
		],
	},
];

export const testimonials = [
	{
		id: 1,
		review: "Very efficient and reliable staff, from nurses to doctors. Punctual and professional ",
		date: "19 June 2024",
		stars: 5,
	},
	{
		id: 2,
		review: "The moment I arrived on the 3rd floor, Madiha introduced herself to myself and my daughters. We were taken to the consultation suite. I was informed of what to expect and got myself ready. Dr Ahmed Shah entered and introduced himself. Every step of the ultrasound was explained and the images on the screen in details which was so good. The whole process was 1st class and I was made to feel.so at ease from start to finish. It was great to get the result that 'nothing sinister was going on' and to get the report and scans the same day is fantastic. Thank you so much. ",
		date: "13 June 2024",
		stars: 5,
	},
	{
		id: 3,
		review: "I found it very easy to book online as all I needed to know was on your the pages of your website. And got an appointment to suit me, speedily. Easy to get to. Didn't have to wait upon arrival, was shown into the Ultrasound scanning room, and procedure explained. The Radiologist gave me a running commentary as she examined me, quite thoroughly. And at the end asked if I had any questions, gave whatever advice she could impart, and advised the next steps I could take. My report confirmed her findings, with screenshots of the pictures she had taken. Thank you",
		date: "13 June 2024",
		stars: 5,
	},
	{
		id: 4,
		review: "I was shown up to the third floor (glad there was a lift ) . Where I was greeted by a member of the breast team . (Olga) .who I found very professional and polite. The whole procedure was explained. Though I was very anxious, I was made to feel at ease. Dr . Sbano carried out the ultra sound . And again I was made to feel at ease and every thing was explained step by step. I would like to thank the complete team for their help as I also needed help afterwards with the down load of documents. Regards, Trevor ",
		date: "31 May 2024",
		stars: 5,
	},
	{
		id: 5,
		review: "This is my second year coming for a breast ultrasound. Both years I got different doctors and I have had a consistently amazing experience. Both consultants were extremely professional, friendly and explained everything in detail, as well as answered all of my questions. I couldn't fault the service at all. I've been made to feel very comfortable each time and I will continue to return yearly. Thank you for a lovely service and such great consultants! Highly recommend!",
		date: "31 May 2024",
		stars: 5,
	},
	{
		id: 6,
		review: "We were seen by Dr Trevor Gaunt who was amazing. We have visited twice and he is so honest and doesn't just take your money! He was really patient and sweet with our 2 year old.",
		date: "17 May 2024",
		stars: 5,
	},
	{
		id: 7,
		review: "We were seen by Dr Trevor Gaunt who was amazing. We have visited twice and he is so honest and doesn't just take your money! He was really patient and sweet with our 2 year old.",
		date: "31 May 2024",
		stars: 5,
	},
	{
		id: 8,
		review: "Excellent service, We had out baby girl's neck looked at today by Dr Trevor Gaunt. He is really a genuine, nice person and great doctor. Then I had the pleasure of having a kidney scan by Dr Sophie Pattision again a lovely lady and great doctor really put my mind and rest pleasure to meet you and all the staff today. Great company wish you all the best!",
		date: "16 May 2024",
		stars: 5,
	},
	{
		id: 9,
		review: "I was so pleased to be able to be seen the same day after finding a lump in my breast. The team were absolutely amazing and I left feeling both relieved and equipped to make the right choice for me. Thank you so much ",
		date: "16 May 2024",
		stars: 5,
	},
	{
		id: 10,
		review: "Staff and doctors were very friendly and helpful. They made me feel at ease and very comfortable during my first ever scan ",
		date: "14 May 2024",
		stars: 5,
	},
	{
		id: 11,
		review: "Efficient, friendly and made to feel relaxed from the moment you enter the clinic. ",
		date: "11 May 2024",
		stars: 5,
	},
	{
		id: 12,
		review: "The service was provided by a Consultant Radiologist, and he explained the procedure and put me at ease. ",
		date: "11 May 2024",
		stars: 5,
	},
];

export const pageContent = [
	{
		slug: "private-female-ultrasound-scan-services",
		theme: "pink",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/VumrqSZfw4NUA5W5vvXVq/a83de4242dc82135ff29a8f27cadf959/ezgif.com-webp-to-jpg.jpg",
		heroImage:
			"https://images.ctfassets.net/1w1x9dft88u5/3s71ytcwr5wfcX2J7bHJu7/f6863fff9930eeaa51b192e0b00858f4/private-female-ultrasound-scan-services-harley-street-ultrasound.png",
		heroImageAlt: "hero image",
		heading: "Female Ultrasound",
		subheading: "Scan Services",
		price: {
			heading: "Starting from",
			amount: "£180",
			iconUrl:
				"https://images.ctfassets.net/1w1x9dft88u5/2XWmfVVbYIS6dV4STN7uiN/2d16be275f48b913a5706255317f764d/f4f08e81-icon-price-starting-female.png",
		},
		description: `<p>
								<strong>Specialist Doctors</strong> are able to provide you a
								<strong>Tailored Assessment</strong> using a variety of
								<strong>Ultrasound</strong> focused scans to diagnose Female health
								issues.
							</p>
							<p>
								Ultrasound is a quick and pain-free way that will help you gain
								peace of mind and identify any concerns you may have.
							</p>`,
		bannerImage:
			"https://images.ctfassets.net/1w1x9dft88u5/4eT82fbznUlXyfHo4QpmFb/8569ebc45099be4f91caf00da0f6a743/conv_desk.png",
		socialCtaImage:
			"https://images.ctfassets.net/1w1x9dft88u5/1BnUuGo8k2bz0ixCiWHaaO/90484cc3125d9f90a8e6551931abf840/private-female-ultrasound-scan-services-harley-street-ultrasound-3.png",
		pageIntro: {
			title: "Services We Offer",
			subtitle: "Female Ultrasound Scans",
			content:
				"<p>Scans available for breast, pregnancies and Pelvic conditions. Ovarian Cancer Lumps, Fibroid </p> <p>Tumours, and Postmenopausal Bleeding are some examples of female conditions that we assess.</p>",
		},
		services: femaleServices,
		featuresCard: {
			title: "Exceptional Care",
			subtitle: "Nothing But",
			description:
				"<p>Private ultrasound scan clinc is where the top priority is the welfare of our visitors. Our&nbsp;<b>Specialists</b>&nbsp;actively practice their specialities at leading hospitals in the UK, ensuring you receive the highest level of care.</p>",
			image: "https://images.ctfassets.net/1w1x9dft88u5/1kfg57XFuneqnGL3pNqLOJ/a2cf3a8de061686e1b12e461a1b7bae1/private-female-ultrasound-scan-services-harley-street-ultrasound-2.png",
		},
	},
	{
		slug: "private-male-ultrasound-scan-services",
		theme: "blue",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/dlOP9bGRMgIP6zDn20Zgo/bd2e5ae3760192153849f0e5c135ef72/desktopBgMale.png",
		heroImage:
			"https://images.ctfassets.net/1w1x9dft88u5/7hvozXocd28Jt6MFbSDZNZ/3de989adcbab9ddf351309a615d7b8aa/private-male-ultrasound-scan-services-harley-street-ultrasound.png",
		heroImageAlt: "hero image",
		heading: "Male Ultrasound",
		subheading: "Scan Services",
		price: {
			heading: "Starting from",
			amount: "£220",
			iconUrl:
				"https://images.ctfassets.net/1w1x9dft88u5/3yl9TUAkKKZiTznbWNof1q/1de9e48274cb0fdd6328d35178f49ff5/d8e83c74-startingfrom-icon.png",
		},
		description: `<p>
								<strong>Specialist Doctors</strong> provide you a
								<strong>Tailored Assessment</strong> using a variety of
								<strong>Ultrasound</strong> focused scans to diagnose<strong> Male health issues.</strong>
							</p>
							<p>
								Ultrasound is a quick and pain-free way that will help you gain
								peace of mind and identify any concerns you may have.
							</p>`,
		bannerImage:
			"https://images.ctfassets.net/1w1x9dft88u5/5v4P81eI6xgJn5Hss9anJi/22dc2decad70eae863e77a8d52625b08/744ba0d7-seamless-secure-access-to-male-ultrasound-scans-bg-desktop.png",
		socialCtaImage:
			"https://images.ctfassets.net/1w1x9dft88u5/6rGJepOonygUqhIMiTnMCo/91bce15fbf8b20c72ddeec6e39bd3ad4/private-male-ultrasound-scan-services-harley-street-ultrasound-3.png",
		pageIntro: {
			title: "Services We Offer",
			subtitle: "Male Ultrasound",
		},
		services: maleServices,
		featuresCard: {
			title: "Exceptional Care",
			subtitle: "Nothing But",
			description:
				"<p>The Harley Street Ultrasound Group are a team of <b>Specialist Consultant Radiology Doctors</b>&nbsp; from leading UK hospitals, providing specialist expertise in private diagnostic ultrasound imaging.</p>",
			image: "https://images.ctfassets.net/1w1x9dft88u5/1L5tOUH8eDfOdeZFRiWXj2/6de820a89d77bcddfcf7479dc7d59742/private-male-ultrasound-scan-services-harley-street-ultrasound-2.png",
		},
	},
	{
		slug: "private-paediatric-ultrasound-services",
		theme: "green",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/2vFieCuTfoQ6BmLLbLrTAS/4e87fbfe475bb5b5d9ee5649e26ad7d5/desktopbgb.png",
		heroImage:
			"https://images.ctfassets.net/1w1x9dft88u5/5Rl5YrGIKL4ceks0Wamxt0/ea31f9b93da1fa824b1296215bfed819/private-paediatric-ultrasound-services-harley-street-ultrasound.png",
		heroImageAlt: "hero image",
		heading: "Paediatric Ultrasound",
		subheading: "Scan Services",
		price: {
			heading: "Starting from",
			amount: "£350",
			iconUrl:
				"https://images.ctfassets.net/1w1x9dft88u5/25EQ83puOWWrq3uvr4zPFU/af19425d86b81dc3321f13c4488fafcc/badgeIconChildren.png",
		},
		description: `<p><b>Paediatric Ultrasound Services</b>&nbsp;performed by&nbsp;<b>Specialist Doctors</b>&nbsp;who will provide your child&nbsp;with a&nbsp;<b>Tailored Assessment</b>&nbsp;that will help you identify concerns early.</p>
							<p>Gain&nbsp;peace of mind with&nbsp;<b>Same-Day Results&nbsp;</b>&amp;&nbsp;feel confident in the care you receive.</p>`,
		bannerImage:
			"https://images.ctfassets.net/1w1x9dft88u5/2YbibhjLsKoHDYXf5FPioj/efe861848cf40032806dbcf3fdc9e7ca/desktopEC.png",
		socialCtaImage:
			"https://images.ctfassets.net/1w1x9dft88u5/1ud0Yhc8B2znD9y4Pp87sR/b01dba85766bade9842aa471980e1d2a/private-paediatric-ultrasound-services-harley-street-ultrasound-3.png",
		pageIntro: {
			title: "Scans We Offer",
			subtitle: "Paediatric Ultrasound",
		},
		services: maleServices,
		featuresCard: {
			title: "Exceptional Care",
			subtitle: "Nothing But",
			description:
				"<p>The Harley Street Ultrasound Group are a team of <b>Specialist Consultant Radiology Doctors</b>&nbsp; from leading UK hospitals, providing specialist expertise in private diagnostic ultrasound imaging.</p>",
			image: "https://images.ctfassets.net/1w1x9dft88u5/1L5tOUH8eDfOdeZFRiWXj2/6de820a89d77bcddfcf7479dc7d59742/private-male-ultrasound-scan-services-harley-street-ultrasound-2.png",
		},
	},
	{
		slug: "private-muscle-joints-ultrasound-scan-services",
		theme: "orange",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/6kJXTuClFmE3zZ37ObAs0N/5f0e9ca10ec7bf44ff902691cfd44ff7/muscleBanner.png",
		heroImage:
			"https://images.ctfassets.net/1w1x9dft88u5/6Rgs4PzzhbeaDMJR0BmPDg/c986715187d008452f544d760d576d9e/private-muscle-and-joints-ultrasound-scan-services-harley-street-ultrasound.png",
		heroImageAlt: "hero image",
		heading: "Muscles & Joints Ultrasound",
		subheading: "Scan Services",
		price: {
			heading: "Starting from",
			amount: "£280",
			iconUrl:
				"https://images.ctfassets.net/1w1x9dft88u5/7FNuXDgnk9zkkryjoh1LLM/28f7e13c5f0dbc09d7c6963cd730d9df/e05e578f-icon-price-starting-muscles-and-joints.png",
		},
		description: `<p><b>Musculoskeletal (MSK) ultrasound</b>&nbsp;is essential in the diagnosis of&nbsp;<b>orthopaedic</b>&nbsp;and&nbsp;<b>sports injuries</b>, as well as&nbsp;<b>chronic conditions</b>&nbsp;such as rheumatoid arthritis.</p>
							<p>Scans performed by&nbsp;<b>Specialist Consultant Doctors</b>&nbsp;who are practicing professionals at leading hospitals in the UK and excel in their specialities.</p>`,
		bannerImage:
			"https://images.ctfassets.net/1w1x9dft88u5/3ZELubFZhjpJJFM1KHWcHn/fb01a938895dd9a752a6fd6b441a4556/deskconv.png",
		socialCtaImage:
			"https://images.ctfassets.net/1w1x9dft88u5/NTQlBVxcjI1MKnNKWAg5p/c76d969f927ec7d3ac42fdcc408d41a4/private-muscle-and-joints-ultrasound-scan-services-harley-street-ultrasound-3.png",
		pageIntro: {
			title: "Services We Offer",
			subtitle: "Muscles & Joints Ultrasound",
			content:
				"<p>As a primary diagnostic tool, Ultrasound is used to monitor the condition of joints, ligaments, cartilage and muscles in real-time.</p>",
		},
		services: muscleServices,
		featuresCard: {
			title: "Exceptional Care",
			subtitle: "Nothing But",
			description:
				"<p>The Harley Street Ultrasound Group are a team of <b>Specialist Consultant Radiology Doctors</b>&nbsp; from leading UK hospitals, providing specialist expertise in private diagnostic ultrasound imaging.</p>",
			image: "https://images.ctfassets.net/1w1x9dft88u5/1L5tOUH8eDfOdeZFRiWXj2/6de820a89d77bcddfcf7479dc7d59742/private-male-ultrasound-scan-services-harley-street-ultrasound-2.png",
		},
	},
];
