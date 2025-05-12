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

export type Doctor = {
	name: string;
	imageUrl: string;
	accreditations: string[];
	slug: string;
	heading: string;
	description: string;
	languages: string[];
	phone: string;
	email: string;
	specialInterests: string[];
	gmcNumber: string;
	specialties: {
		title: string;
		slug: string;
	}[];
};

export type Price = {
	service: string;
	slug: string;
	price: string;
	subtitle?: string;
};

export type TransportRoute = {
	id: number;
	title: string;
	description: string;
	icon: string;
	routes?: {
		id: number;
		text: string;
		icon: string;
	}[];
	sections?: {
		id: number;
		title: string;
		description: string;
	}[];
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

export const childrenServices: Service[] = [
	{
		slug: "neck",
		label: "Neck",
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
	{
		slug: "chest",
		label: "Chest",
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
	{
		slug: "abdomen_pelvic",
		label: "Abdoment / Pelvic",
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
	{
		slug: "muscles_joints",
		label: "Muscles & Joints",
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
	{
		slug: "lumps_bumps",
		label: "Lumps & Bumps",
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
		services: childrenServices,
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

export const doctors: Doctor[] = [
	{
		name: "Kate Hawtin",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/4z7IjZG4vyTKUGGnS2xZcI/edba60822c1b4effdc6fca47ce4e2b44/our-specialists-kate-hawtin.png",
		accreditations: ["MA, MBBS, FRCR"],
		slug: "kate-hawtin",
		heading:
			"Dr. Kate Hawtin is a Consultant Radiologist and Joint Breast Imaging Lead at University College London Hospital.\nDr. Kate Hawtin qualified from Cambridge University and Imperial College School of Medicine in 2000, graduating with distinction.",
		description:
			"Dr. Kate Hawtin is a Consultant Radiologist and Joint Breast Imaging Lead at University College London Hospital.\nDr. Kate Hawtin qualified from Cambridge University and Imperial College School of Medicine in 2000, graduating with distinction. She obtained Membership of the Royal College of Physicians in 2003 prior to commencing Radiology training at Imperial College NHS Trust, and was awarded Fellowship of the Royal College of Radiologists in 2007. \nShe was appointed as a Consultant Radiologist in 2012, and has specialist expertise in breast and general imaging. She undertakes all aspects of breast imaging including mammographic, ultrasound, MRI and CT diagnostics. She performs all ultrasound and stereotactic breast related procedures, including vacuum excision and breast lesion localisation prior to surgery.\nDr. Kate Hawtin is also joint deputy head of London School of Radiology, having previously been training programme director for the University College Hospital Radiology training scheme, and is enthusiastic about education and training the next generation of Radiologists.",
		languages: ["English"],
		specialInterests: ["Breast"],
		phone: "0203 904 4441",
		email: "contact@harleystreetultrasound.com",
		gmcNumber: "4725695",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Dr Hussain Amin",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/OwEbZrbz2N7V4CDgEMEwx/d5f84eb22f6d64ba62361142b68238bd/our-specialists-hussain-amin.png",
		accreditations: ["MBBS BSc MRCS FRCR"],
		slug: "hussain-amin",
		heading:
			"Dr. Hussain Amin is a Consultant Radiologist at University College of London Hospital with a specialist interest in breast, oncology and general radiology.",
		description:
			"Dr. Hussain Amin is a Consultant Radiologist at University College of London Hospital with a specialist interest in breast, oncology and general radiology. Dr. Hussain Amin qualified from Imperial College London School of Medicine in 2012. After completing Foundation Training, Dr. Amin completed his core surgical training obtaining membership to the Royal College of Surgeons of Enlgand in 2015 after which he embarked on a period of training in Urological Surgery. Dr. Amin obtained his Fellowship to the Royal College of Radiologists whilst training in the London Deanery. Dr. Hussain Amin has specialist expertise in breast, oncology and general imaging. He undertakes all aspects of breast imaging including mammography, Ultrasound, MRI and CT diagnostics. He performs all ultrasound and stereotactic breast related procedures including vacuum excision. Dr. Hussain Amin is passionate about teaching and training and is a medical examiner at University College of London School of Medicine as well as an accredited Educational Supervisor. He is also responsible for training specialist trainees in breast imaging at University College London Hospital. Dr. Hussain Amin has published and presented in international radiological and surgical conferences as well as collaborated on national multicentre projects.",
		languages: ["English", "Arabic"],
		specialInterests: ["Breast", "Oncology", " General Radiology"],
		phone: "0203 904 4441",
		email: "contact@harleystreetultrasound.com",
		gmcNumber: "7293783",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Dr Shayan Ahmed",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/4xq8t78eGaEI986qiZwEX1/09ac861ce86f2a5fc55f7d1a3390dae1/our-specialists-dr-shayan-ahmed.png",
		accreditations: ["MBBS, BSc (Hons), FRCR, DFSEM (UK)"],
		slug: "dr-shayan-ahmed",
		heading:
			"Dr Shayan Ahmed is a Consultant Radiologist at Barts Health NHS Trust with a special interest in musculoskeletal and urological imaging. He routinely performs a vast array of general and musculoskeletal diagnostic ultrasound. ",
		description:
			"Dr Shayan Ahmed is a Consultant Radiologist at Barts Health NHS Trust with a special interest in musculoskeletal and urological imaging. He routinely performs a vast array of general and musculoskeletal diagnostic ultrasound. He is particularly skilled in performing ultrasound-guided musculoskeletal interventions. Dr Ahmed graduated from Kings College London with a Distinction in 2011 and went on to complete his core Radiology specialist training in the East Anglia region encompassing hospitals in Cambridge, Essex and Bedfordshire. He undertook higher subspecialty training in musculoskeletal and trauma imaging at two internationally renowned institutions – The Royal National Orthopaedic Hospital and Kings College Hospital. More recently, he has successfully completed the Musculosketal Medicine Diploma of the Faculty of Sports of Exercise Medicine, of which he is a diplomatic member. Dr Ahmed regularly teaches on leading musculoskeletal radiology courses, has presented at international conferences and is actively involved in organising national Radiology educational events. He is also passionate about training the future generation of Radiologists. He is a mentor and supervisor to Radiology Registrars within his NHS Trust and oversees their training.",
		languages: ["English", "Urdu", "Hindi"],
		specialInterests: ["Musculoskeletal radiology", "Urological Imaging", "General Imaging"],
		phone: "0203 904 4441",
		email: "contact@harleystreetultrasound.com",
		gmcNumber: "7139487",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Ayman Mahfouz",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/3C94ODYagPmmezEBP0nMmC/379885b8808c3ff3c799b9d1c3c9cf21/our-specialists-ayman-mahfouz.png",
		accreditations: ["MBBS, FRCR"],
		slug: "ayman-mahfouz",
		heading:
			"Dr. Ayman Mahfouz is a Consultant Radiologist at University College of London Hospital (UCLH), his specialist expertise include breast, gynaecology and general radiology imaging.",
		description:
			"Dr. Ayman Mahfouz is a Consultant Radiologist at University College of London Hospital (UCLH), his specialist expertise include breast, gynaecology and general radiology imaging.\nDr. Ayman Mahfouz qualified from Barts and the Royal London School of Medicine in 2009. After completing his junior doctor training at Imperial College Healthcare NHS trust, Dr Mahfouz attained his Fellowship at the Royal College of Radiologists whilst training in the East Midlands Deanery.\nDr. Ayman Mahfouz has specialist expertise in breast, gynaecology and general imaging. \nHe undertakes all aspects of breast imaging including mammographic (plain, contrast enhanced and 3D), Ultrasound, MRI and CT diagnostics. He performs all ultrasound and stereotactic breast related procedures including vacuum excision. \nHe also undertakes interpretation of ultrasound, CT and MRI imaging of gynaecological disorders. \nDr. Ayman Mahfouz is a designated appraiser for doctors at UCLH and has previously been elected as a regional representative for doctors in training at the Royal College of Radiologists. He previously held the role as Emergency Imaging Lead for UCLH. He is enthusiastic about education and continues to examine junior doctors at the distinguished Leicester FRCR 2B course.",
		languages: ["English", "Arabic"],
		specialInterests: ["Breast", "Gynaecology", "General Imaging"],
		phone: "0203 904 4441",
		email: "contact@harleystreetultrasound.com",
		gmcNumber: "7041035",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Dr Sophie Pattison",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/3gLLzPPl0pPuu4L2zAP900/d568a8695592dc1f3a118d1fb45b8b75/our-specialists-sophie-pattison.png",
		accreditations: ["BScHons, MBcHB, MRCS, FRCR"],
		slug: "sophie-pattison",
		heading:
			"Dr Sophie Pattison is a Consultant Radiologist at University College London. her specialist expertise include breast imaging Ultrasound, CT and MRI and stereotactic breast related procedures",
		description:
			"Dr Sophie Pattison is a Consultant Radiologist at University College London. her specialist expertise include breast imaging Ultrasound, CT and MRI and stereotactic breast related procedures Dr Sophie Pattison is a Consultant Radiologist \xa0She has an NHS practice at University College London Hospital. Dr Pattison trained in medicine at Bristol University. She undertook surgical training which included a period of breast surgery and obtained Membership of the Royal College of Surgeons in 2001. She then became a lecturer in patient safety and subsequently undertook specialist radiological training at University College London Hospital. She was appointed as a Consultant Radiologist in 2014. Dr Pattison is the joint lead for breast radiology at University College London Hospital and is also joint lead for quality and safety in the radiology department. She also undertakes breast screening radiology at North London Breast Screening Service. She undertakes all aspects of breast imaging including Mammography, Ultrasound, MRI and CT diagnostics. She performs all ultrasound and stereotactic breast related procedures including vacuum excision.",
		languages: ["English"],
		specialInterests: [" General Radiology", "Breast Radiologist"],
		phone: "0203 904 4441",
		email: "contact@harleystreetultrasound.com",
		gmcNumber: "4406394",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Xin Kowa",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/5jSr77m6YQIPlOJoU88iqL/b523dedebf4c9cd7b29957d2592b4eee/our-specialists-xin-kowa.png",
		accreditations: ["FRCR, MBBS, BSc (Hons)"],
		slug: "xin-kowa",
		heading:
			"Dr Xin Kowa is a consultant head and neck radiologist at University College London Hospital (UCLH). She has trained and worked in large tertiary centres in London (UCLH, Royal London Hospital and St Bartholomew's Hospital) ",
		description:
			"Dr Xin Kowa is a consultant head and neck radiologist at University College London Hospital (UCLH). She has trained and worked in large tertiary centres in London (UCLH, Royal London Hospital and St Bartholomew's Hospital) where she completed her subspecialty fellowship in head and neck imaging in 2020.\nHer multimodality imaging practice of the head and neck region includes benign and malignant pathologies, and sarcomas (for which UCLH is the regional specialist referral centre). In addition, intraoral scanning also forms part of her diagnostic sonographic work. She provides ultrasound-guided fine needle aspiration and core biopsy procedures of:\n- Thyroid\n- Lymph nodes\n- Major salivary glands\n- Soft tissue lumps and bumps of the head, neck and face",
		languages: ["English"],
		specialInterests: ["Head and Neck"],
		phone: "0203 904 4441",
		email: "contact@harleystreetultrasound.com",
		gmcNumber: "7419419",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Dr Trevor Gaunt",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/6H4F3eco4xylplOso0dSP8/13b7fee60a5d812aecd5a07199d3fcde/our-specialists-trevor-gaunt.png",
		accreditations: ["BSc (Hons), MBBS, FRCR"],
		slug: "trevor-gaunt",
		heading:
			"Dr Trevor Gaunt is a Specialist Paediatric Consultant Radiologist at University College London Hospital.",
		description:
			"Dr Trevor Gaunt is a Specialist Paediatric Consultant Radiologist at University College London Hospital. Dr Trevor Gaunt is a Consultant Paediatric Radiologist at University College London Hospitals. Dr Gaunt completed his Radiology training in London with fellowships at both Evelina London Children's Hospital, and Great Ormond Street Hospital for Children. He performs and interprets thousands of radiological examinations for children each year. Children are not just small adults. Scanning children requires time, patience and exceptional attention to detail. An anxious time for any parent, Dr Gaunt will ensure you are well informed about the process and results of your child’s scan, in a friendly and approachable way.",
		languages: ["English"],
		specialInterests: [],
		phone: "0203 904 4441",
		email: "contact@harleystreetultrasound.com",
		gmcNumber: "None",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Niels van Vucht",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/4pQWolMfNhQGdwYTcyT7fE/e1d5b4d67a7a18d126621f7162ad2450/our-specialists-niels-van-vucht.png",
		accreditations: ["BSc, MSc, MBBS, FRCR"],
		slug: "niels-van-vucht",
		heading:
			"Dr. Niels van Vucht is a Consultant Radiologist at University College of London Hospital (UCLH) with a subspecialty in Musculoskeletal Imaging.",
		description:
			"Dr. Niels van Vucht is a Consultant Radiologist at University College of London Hospital (UCLH) with a subspecialty in Musculoskeletal Imaging. He completed a Fellowship in Musculoskeletal radiology at the Royal National Orthopaedic Hospital in Stanmore, focused on bone- and soft tissue sarcoma and image guided interventions.\nDr. Niels van Vucht lectures at a range of medical conferences and has a passion for teaching. He is an author of several scientific publications and collaborates on research in musculoskeletal and sports imaging.",
		languages: ["English", "Dutch"],
		specialInterests: ["Musculoskeletal radiology"],
		phone: "07786632430",
		email: "niels@mskmedicalimaging.com",
		gmcNumber: "7579988",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Dr Tahir Hussain",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/78QcTRU3zUO66TkMfq6g8z/0f56cc5b2b55950b4845d3a3ce7f7b71/our-specialists-tahir-hussain.png",
		accreditations: ["MBBS BSc FRCR"],
		slug: "tahir-hussain",
		heading:
			"Dr. Tahir Hussain, MBBS BSc FRCR, qualified from University College London Medical School in 2011, and subsequently completed his General and Specialist Nuclear Medicine",
		description:
			"Dr. Tahir Hussain, MBBS BSc FRCR, qualified from University College London Medical School in 2011, and subsequently completed his General and Specialist Nuclear Medicine & PET CT Radiology training through the East Midlands Radiology training scheme in 2019. Dr. Hussain has specialist expertise in Nuclear Medicine and PET CT, oncological imaging, and general radiology imaging. He is based at the Barts Health NHS Trust, working at the Royal London and St. Bartholomew's Hospitals. He routinely performs all general ultrasound examinations, including full abdomen, male pelvis, and testicular examinations. Currently, Dr. Hussain serves as the Clinical Lead for the Nuclear Medicine department at Barts Health NHS Trust and is actively involved in medical education.",
		languages: ["English"],
		specialInterests: ["Nuclear Medicine & PET CT", "Oncology", " General Radiology"],
		phone: "07944975648",
		email: "tahir@harleystreetultrasound.com",
		gmcNumber: "7169719",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Dr Husam Wassati",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/aHXeHgebbrMRgL8QCk9ef/3c4d4b7a3aee6f342d1aeb0808c1692c/our-specialists-husam-wassati.png",
		accreditations: ["MBChB, FRCR"],
		slug: "husam-wassati",
		heading:
			"Dr Husam Wassati is a Consultant Head & Neck and Neuroradiologist at King’s College Hospital NHS Foundation Trust.",
		description:
			"Dr Husam Wassati is a Consultant Head & Neck and Neuroradiologist at King’s College Hospital NHS Foundation Trust. Dr Wassati completed his general and subspecialist head & neck and neuroradiology training at the University Hospitals of Leicester and Queen Medical Centre at Nottingham following a period of training in neurosurgery at specialist hospitals in London.  He performs all multimodality imaging and image-guided interventions of the whole head and neck region including the thyroid, parathyroid, major salivary glands, lymph nodes and benign/malignant conditions. Dr Wassati introduced, with a colleague (Dr Timothy Yusuf), the UK first microwave ablation for benign thyroid nodules at the Princess Royal University Hospital NHS trust (part of King's College Hospital NHS Foundation Trust). Dr Wassati also performs general ultrasound examinations of the liver, gallbladder, kidneys, testes and deep veins of the arms and legs and performs them on a regular basis in his clinical practice. Dr Husam Wassati is a member of the: Dr Wassati has a great interest in education, having arranged several teaching sessions and national courses to radiology trainees, medical students, and radiographers.",
		languages: ["English", "Arabic"],
		specialInterests: ["Head and Neck", "Neuroradiologist"],
		phone: "07508547429",
		email: "H.wassati@nhs.net",
		gmcNumber: "7251947",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Miss Chloe Constantinou",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/2U948ecmcpHNkbUSvckuTn/8b4466fbf9f73bc1299602105c6afd3d/our-specialists-chloe-constantinou.png",
		accreditations: ["MD, PhD"],
		slug: "chloe-constantinou",
		heading:
			"Miss Chloe Constantinou is a Specialist Oncoplastic Breast Surgeon. She is currently Consultant Breast Surgeon at Kingston Hospital NHS Foundation Trust, and an Honorary Consultant Breast Surgeon at The Royal Marsden Hospital.",
		description:
			"Miss Chloe Constantinou is a Specialist Oncoplastic Breast Surgeon. She is currently Consultant Breast Surgeon at Kingston Hospital NHS Foundation Trust, and an Honorary Consultant Breast Surgeon at The Royal Marsden Hospital.\nShe obtained higher general surgical training in Red Cross Hospital in one of the busiest and largest hospitals in Athens. She received further training in breast surgery and advanced oncoplastic breast surgery techniques at some of London's world’s famous Breast Units including Imperial College London and Royal Free Hospital. Prior to taking up a Consultant Oncoplastic Breast Surgeon post at Kingston NHS Foundation Hospital she undertook a prestigious Oncoplastic Fellowship in Breast Surgery at Royal Marsden Hospital, London. Academically in 2018, she was awarded a PhD thesis for her research on Triple Negative Breast Cancer, at University of Ioannina, School of Medicine, Greece; a retroprospective project that investigated the correlation of immnunohistochemical markers with the prognosis of triple negative breast cancer. The results were published in peer review journals. She has an active interest in surgical research and has published widely in peer reviewed journals. Her special interests include surgery for breast cancer, immediate breast reconstruction, risk reducing surgery, oncoplastic techniques, therapeutic breast reduction, breast conservation surgery for large breast tumours, and breast volume replacement techniques for cancer.   She runs rapid diagnostic clinics and patients that undergoing a biopsy are discussed in the Multi-Disciplinary Team, of breast surgeons, radiologists, oncologists, histopathologists and specialist nurses who meet on a weekly basis to discuss patient cases with the aim to provide best quality of care  Key Publications  Expression and Clinical Significance of claudin-7, PDL-1, PTEN, c-Kit, c-Met, cMyc, ALK, CK5/6, CK17, p53, EGFR, Ki67, p63 in Triple Negative Breast Cancer.A Single Centre Prospective Observational Study. C Constantinou, S Papadopoulos, E Karyda, A Alexopoulos, N Agnanti, A Batistatou and H Harisis, in vivo32: 303-311 (2018) doi:10.21873/invivo.11238 Inflammation and breast cancer. C Constantinou, IS Fentiman. Breast Cancer Management, 2013 Vol. 2, No. 4, Pages 311-325, DOI 10.2217/bmt.13.26 (doi:10.2217/bmt.13.26) Ductal Carcinoma in Situ Treatment Requires a Multidisciplinary Approach. C Constantinou, IS Fentiman. Journal of Cancer Therapy 2013. Vol. 4 No. 7, Article ID: 36240 , 14 pages DOI:10.4236/jct.2013.47140 The value of plasma neurotensin and cytokine measurement for the detection of bowel ischaemia in clinically doubtful cases: a prospective study. Sgourakis G, Papapanagiotou A, Kontovounisios C, Karamouzis MV, Lanitis S, Konstantinou C, Karaliotas C, Papavassiliou AG.Exp Biol Med (Maywood).  Diagnosis and treatment of Male Breast Cancer. Chloe Constantinou and Ian Fentiman. Breast cancer Management, 2013 Vol. 1, No. 4, Pages 295-304 , DOI. 10.2217/bmt.12.47 (doi:10.2217/bmt.12.47",
		languages: ["English", "Greek"],
		specialInterests: [
			"Surgery for breast cancer",
			"Immediate breast reconstruction",
			"Risk reducing surgery",
			"Oncoplastic techniques",
			"Therapeutic breast reduction",
			"Breast conservation surgery for large breast tumours",
			"Breast volume replacement techniques for cancer",
		],
		phone: "+447835481203",
		email: "miss.chloeconstantinou@nhs.net",
		gmcNumber: "7112163",
		specialties: [
			{
				title: "Breast Surgeon",
				slug: "breast-surgeon",
			},
		],
	},
	{
		name: "Dr Nikhil Patel",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/3o5GyStCt8rPw3QEAGb1rq/42dd83ec1ae8a9523630c3f7b47d1638/our-specialists-nikhil-patel.png",
		accreditations: ["MBBS, FRCR, BSc(Hons)"],
		slug: "nikhil-patel",
		heading:
			"Dr Nikhil R Patel is a Consultant Radiologist at King’s College Hospital NHS Foundation Trust and specialises in musculoskeletal imaging.",
		description:
			"Dr Nikhil R Patel is a Consultant Radiologist at King’s College Hospital NHS Foundation Trust and specialises in musculoskeletal imaging.\nHe completed both general radiology and subspecialty musculoskeletal radiology training within the Kent, Surrey, and London deaneries. He spent his final year of specialty training at St George’s Hospital, London to further enhance his musculoskeletal radiology skills. He is experienced in a vast array of musculoskeletal imaging including MRI, CT, and ultrasound guided procedures. He also performs general ultrasound as part of his clinical practice including abdomen, kidneys, testes and DVT scans. Dr Patel qualified from Barts and The London, School of Medicine in 2012, where he also achieved a BSc (Hons) in Sports and Exercise Medicine. He is passionate about teaching, having taught both locally and nationally, including anatomy at university level, and helps organise regional radiology courses. He also regularly attends radiology conferences and courses to keep up to date with the latest clinical practice. Dr Patel is a member of:",
		languages: ["English", "Gujarati"],
		specialInterests: ["Musculoskeletal radiology"],
		phone: "07932 974 038",
		email: "nikhilpatel@doctors.org.uk",
		gmcNumber: "7271989",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Ms Heba Alkutbi",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/79bZtyaGftHN359ny7MBy9/75d88e27b49b7081b86f0c46a4ac9833/our-specialists-ms-heba-alkutbi.png",
		accreditations: ["BSc, PGc "],
		slug: "ms-heba-alkutbi",
		heading:
			"Heba Alkutbi ( BSc PGc ) a senior sonographer with over 17 years scanning experience. Heba completed her BSc in Diagnostic Radiography at St Georges Medical School in 2004.",
		description:
			"Heba Alkutbi ( BSc PGc ) a senior sonographer with over 17 years scanning experience . Heba completed her BSc in Diagnostic Radiography at St Georges Medical School in 2004. She went on to specialise in Medical Ultrasound and completed her PGc training at City University in 2007. Heba has extensive experience in both obstetrics and gynaecology ultrasound. She has also trained many midwives, radiographers and doctors and was the lead clinical supervisor and deputy Ultrasound Services Manager at Imperial College Healthcare NHS Trust in London. Heba is accredited by the Fetal Medicine Foundation to undertake fetal Nuchal Translucency scans to screen for chromosomal abnormalities such as Down, Edward and Patau’s Syndromes. She also undertakes all types of obstetric scanning including early pregnancy, dating, anomaly, Fetal Doppler studies, fetal well being scans and 3D/4D scans.\nAs well as Obstetrics, Heba has a keen interest in gyanecology ultrasound and has worked closely with many world-renowned Gynaecologist. She has extensive experience in using ultrasound to screen for gynaecology cancers. Heba is registered with the Health Care Professional Council and a member of the British Medical Ultrasound Society (BMUS) and the International Society of Ultrasound in Obstetrics and Gynaecology (ISUOG).",
		languages: ["English", "Arabic"],
		specialInterests: ["Obstetrics", "Gynaecology"],
		phone: "0203 904 4441",
		email: "heba.alkutbi@me.com",
		gmcNumber: "None",
		specialties: [
			{
				title: "Sonographer",
				slug: "sonographer",
			},
		],
	},
	{
		name: "Dr Ahmed Shah",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/2IMyNnvoyQRaYPsUSx72f0/574b89fe4fd3dc7c4512466d683ab946/our-specialists-ahmed-shah.png",
		accreditations: ["FRCR, MBBS, BSc"],
		heading:
			"Dr Shayan Ahmed is a Consultant Radiologist at Barts Health NHS Trust with a special interest in musculoskeletal and urological imaging. He routinely performs a vast array of general and musculoskeletal diagnostic ultrasound.",
		slug: "ahmed-shah",
		description:
			"Dr Ahmed Shah is a Consultant Breast and General Radiologist, offering a wide range of ultrasound scans and procedures at 99 Harley Street. Dr Shah completed a Bachelors Degree in Molecular Pharmacology at Kings College London in 2005, before entering medical training at Barts and The London Medical School. He completed junior doctor rotations throughout North and East London before entering clinical radiology training in Leicester, a highly coveted radiology training program. He became a Fellow of the Royal College of Radiologists in 2019 and was appointed Consultant Radiologist at Frimley Health NHS Trust in 2020. He is a specialist in breast and oncology imaging, and is also a screening specialist in the NHS Breast Screening Programme, based at the prestigious Parapet Breast Clinic, Windsor. This means Dr Shah reads a very high volume of mammograms annually, and is involved in complex and challenging patient cases.  In addition to expert imaging for benign and malignant breast disease (including biopsies and cyst aspirations), Dr Shah offers general ultrasound of the abdomen, scrotum, lumps and bumps, deep veins and other general scans. Our patients often comment on Dr Shah’s excellent communication skills, ability to translate complex knowledge and findings into easily understandable and digestible information, excellent bedside manner and holistic approach to caring for his patients. His reviews speak for themselves.  Aside from the practice of radiology, Dr Shah has a keen interest in artificial intelligence and its ability to benefit patient care. He is part of a national research consortium evaluating artificial intelligence in breast ultrasound, with a view to reducing unnecessary biopsies, currently applying for national implementation funding from NIHR. Dr Shah is Senior Clinical Lecturer in Radiology at Brunel Medical School, and is the undergraduate lead for Radiology and MSK medicine at Wexham Park Hospital. He is also actively involved in the training of Radiology registrars at his NHS trust. He is the lead for radiology discrepancies and learning (REALM) at his NHS site, an important radiology department governance role. Dr Shah has a wonderful wife and two young children, who keep him on his toes outside of work. He enjoys gardening, DIY, football and travelling.",
		languages: ["English"],
		specialInterests: ["Consultant Breast", " General Radiology"],
		phone: "0203 904 4441",
		email: "contact@harleystreetultrasound.com",
		gmcNumber: "7138411",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Hela Sbano",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/5g95AqpXif8bhcHhtvbhkn/d7d8b3a5afb08d41d9a8a19d4fc3e7a1/our-specialists-hela-sbano.png",
		accreditations: ["MBBS, BSc, MRCP, FRCR"],
		slug: "hela-sbano",
		heading:
			"Dr. Hela Sbano is a Consultant Radiologist at the University College London Hospital (UCLH) with specialist expertise in Breast and General radiology.",
		description:
			"Dr. Hela Sbano is a Consultant Radiologist at the University College London Hospital (UCLH) with specialist expertise in Breast and General radiology.\nDr. Hela Sbano trained in Medicine at Charing Cross and Westminster Medical School (part of Imperial College\nSchool of Medicine) where she obtained the MBBS and BSc.\nShe underwent postgraduate training and was awarded the Membership of the Royal College of Physicians in 2000.\nShe undertook Specialist Radiology training at Imperial College\nNHS Trust and was awarded the Fellowship of the Royal College of Radiologists in 2007.\nDr. Hela Sbano was appointed as a Consultant Breast and General Radiologist at the University College London Hospital in 2010.\nShe undertakes all aspects of breast imaging including Mammography, Ultrasound, MRI, and CT diagnostics.\nShe performs all ultrasound and stereotactic breast-related procedures including vacuum excision and breast lesion localisation prior to surgery.\nDr. Hela Sbano also undertakes general, acute, and on-call radiology. She held the role of UCLH lead consultant for Breast Imaging for 8 years.\nDr. Hela Sbano has been a Reviewer for the British Journal of Radiology since 2010.\nShe is a designated appraiser for doctors at UCLH. Enthusiastic about education, Dr Sbano is a clinical tutor at UCLH.\nShe was also a College tutor for the UCH radiology training scheme (2014 - 2016) as well as Audit lead for the UCLH department of Imaging (2013 - 2014)",
		languages: ["English"],
		specialInterests: ["Breast Imaging", " General Radiology"],
		phone: "0203 904 4441",
		email: "contact@harleystreetultrasound.com",
		gmcNumber: "4308654",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
	{
		name: "Mr Massimiliano Cariati",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/7nrHn27Oq2XukyYcIlilBX/64ebaa6fa87a733749deb38729e29f22/our-specialists-massimiliano-cariati.png",
		accreditations: ["MBBS, PhD, FRCS"],
		slug: "mr-massimiliano-cariati",
		heading:
			"Mr. Massimiliano Massi Cariati is a consultant oncoplastic breast surgeon. His field of expertise is the assessment and management of benign and malignant diseases of the breast.",
		description:
			"Mr. Massimiliano Massi Cariati is a consultant oncoplastic breast surgeon. His field of expertise is the assessment and management of benign and malignant diseases of the breast. He has a specialised interest in breast cancer management, breast conservation strategies, oncoplastic breast surgery and breast reconstruction, in particular pre- and sub-pectoral immediate implant-based reconstruction with acellular dermal matrix.\nMr. Massimiliano Massi Cariati graduated from the University of Florence Medical School summa cum laude at the top of his class. After completing his basic medical training in Italy, he moved to the UK to read for a PhD degree in surgical oncology at the University of Cambridge, with a thesis on breast cancer stem cells. Having obtained his PhD degree he went on to complete his Core Surgical Training with the London School of Surgery, and then his higher surgical training within the London and South-East Thames region which led to the award of his CCT in general surgery with a sub-specialty interest in breast surgery. During this time he spent three years in the Oncoplastic Breast Unit at Guy's and St Thomas' in London, training in oncoplastic and reconstructive breast surgery. He is a fellow of the Royal College of surgeons of England.\nDuring his surgical training, he was awarded the prestigious NIHR Clinical Academic Lectureship in Breast Surgery as well as the Academy of Medical Sciences Starter Grant, which allowed him to develop his research interests within the Department of Research Oncology at King's College London, with a focus on the development of novel intra-operative technologies for the assessment of resection margins in breast conserving surgery, and a parallel interest in the pathophysiology of lymphoedema. His research was recognised with the award of the 2016 Ronald Raven Proferred Prize by the British Association of Surgical Oncology and he has lectured and presented his work nationally and internationally.",
		languages: ["English", "Italian", "Spanish"],
		specialInterests: [
			"Breast Reconstruction",
			"Oncoplastic Surgery",
			"Breast disease",
			"Breast Cancer",
		],
		phone: "07939430662",
		email: "admin@cariatibreastsurgeon.co.uk",
		gmcNumber: "6060684",
		specialties: [
			{
				title: "Breast Surgeon",
				slug: "breast-surgeon",
			},
		],
	},
	{
		name: "Sanjay Karamsadkar",
		imageUrl:
			"https://images.ctfassets.net/1w1x9dft88u5/2AIymFmc0N13a0fFNYAh8S/e8f79d977274d4377bae06e4c2485983/our-specialists-sanjay-karamsadkar.png",
		accreditations: [" MBBS, BSc (Hons), FRCR"],
		slug: "sanjay-karamsadkar",
		heading:
			"Dr. Sanjay Karamsadkar is a Consultant Radiologist at the Royal Free London NHS Foundation Trust. His specialist expertise includes gastrointestinal, hepatobiliary and general imaging.",
		description:
			"Dr. Sanjay Karamsadkar is a Consultant Radiologist at the Royal Free London NHS Foundation Trust. His specialist expertise includes gastrointestinal, hepatobiliary and general imaging. \nDr. Sanjay Karamsadkar qualified from University College London Medical School in 2014. He undertook specialist training at St Bartholomew's and Royal London hospitals where he attained his Fellowship at the Royal College of Radiologists. He undertakes all aspects of gastrointestinal and hepatobiliary imaging which include MRI, CT, ultrasound, fluoroscopy and plain radiographs. Dr Karamsadkar has a keen interest in teaching and is involved in the training of specialist registrars at the Royal Free London NHS Foundation Trust.",
		languages: ["English"],
		specialInterests: ["Gastrointestinal", "Hepatobiliary radiology"],
		phone: "07939430662",
		email: "admin@cariatibreastsurgeon.co.uk",
		gmcNumber: "7461128",
		specialties: [
			{
				title: "Radiologist",
				slug: "radiologist",
			},
		],
	},
];

export const childrenPriceList: Price[] = [
	{
		service: "Baby Hips | 0 - 4 weeks",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Baby Spine | 0 - 4 Weeks",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Boy Testes",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Abdomen & Pelvic",
		slug: "#",
		price: "£450.00",
	},
	{
		service: "Child Ankle",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Armpit / Axilla",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Breast",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Chest / Thorax",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Elbow",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Foot",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Hand & Wrist",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Hip",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Kidneys & Urinary Tract",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Knee",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Neck / Thyroid",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Pelvic",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Shoulder",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Soft Tissue Lumps",
		slug: "#",
		price: "£350.00",
	},
	{
		service: "Child Vascular Malformation",
		slug: "#",
		price: "£350.00",
	},
];

export const femalePriceList: Price[] = [
	{ service: "Abdomen", slug: "#", price: "£290.00" },
	{ service: "Abdomen & Pelvic", slug: "#", price: "£440.00" },
	{ service: "Abdominal Aortic Aneurysm AAA Screening", slug: "#", price: "£260.00" },
	{ service: "Armpit / Axilla", slug: "#", price: "£260.00" },
	{ service: "Breast Ultrasound with Armpit / Axilla", slug: "#", price: "£350.00" },
	{
		service: "Deep Vein Thrombosis - Single Arm | DVT Ultrasound",
		slug: "#",
		price: "£290.00",
		subtitle: "+£160 for Both Arms",
	},
	{
		service: "Deep Vein Thrombosis - Single Leg | DVT Ultrasound",
		slug: "#",
		price: "£290.00",
		subtitle: "+£160 for Both Legs",
	},
	{ service: "Female Health Check", slug: "#", price: "£600.00" },
	{ service: "Hernia", slug: "#", price: "£260.00" },
	{ service: "Kidneys & Urinary Tract", slug: "#", price: "£260.00" },
	{ service: "Liver & Gallbladder", slug: "#", price: "£260.00" },
	{ service: "Lumps, Bumps and Soft Tissue", slug: "#", price: "£260.00" },
	{ service: "Neck", slug: "#", price: "£280.00" },
	{ service: "Ovarian Screening", slug: "#", price: "£260.00" },
	{ service: "Pelvic", slug: "#", price: "£260.00" },
	{ service: "Thyroid", slug: "#", price: "£280.00" },
];

export const breastClinicPriceList: Price[] = [
	{ service: "Breast Consultation", slug: "#", price: "£350.00" },
	{ service: "Breast Implant Check", slug: "#", price: "£350.00" },
	{ service: "Breast Lumps & Bumps", slug: "#", price: "£350.00" },
	{ service: "Breast Ultrasound with Armpit / Axilla", slug: "#", price: "£350.00" },
	{ service: "Complete Breast Assessment (Surgeon & Ultrasound)", slug: "#", price: "£550.00" },
	{ service: "Female Health Check", slug: "#", price: "£600.00" },
	{ service: "Male Breast", slug: "#", price: "£280.00" },
];

export const pregnancyPriceList: Price[] = [
	{
		service: "Anatomy / Anomaly Ultrasound | From 18 - 24 weeks",
		slug: "#",
		price: "£260.00",
		subtitle: "Uterine Artery Doppler study - Twin Pregnancy Scan",
	},
	{
		service: "Dating Scan | From 10 - 15 Weeks",
		slug: "#",
		price: "£160.00",
		subtitle: "Twin Pregnancy Scan + £100.00",
	},
	{ service: "Early Pregnancy Scan | From 6 - 10 weeks", slug: "#", price: "£160.00" },
	{
		service: "Gender & Foetal Wellbeing | From 16 - 18 Weeks",
		slug: "#",
		price: "£190.00",
		subtitle: "Twin Pregnancy Scan + £90.00",
	},
	{
		service: "Growth Scan | From 24 - 40 Weeks",
		slug: "#",
		price: "£240.00",
		subtitle: "Twin Pregnancy Scan + £90.00",
	},
	{ service: "Non Invasive Prenatal Test - NIPT | From 10 Weeks", slug: "#", price: "£525.00" },
	{
		service: "Ovulation Scan | Follicle Tracking & Endometrial Thickness",
		slug: "#",
		price: "£260.00",
	},
	{ service: "Pelvic", slug: "#", price: "£260.00" },
	{
		service: "Presentation Scan | From 35 - 40 weeks",
		slug: "#",
		price: "£160.00",
		subtitle: "Twin Pregnancy Scan + £90.00",
	},
];

export const malePriceList: Price[] = [
	{ service: "Abdomen", slug: "#", price: "£290.00" },
	{ service: "Abdominal Aortic Aneurysm | AAA Screening", slug: "#", price: "£260.00" },
	{ service: "Armpit / Axilla", slug: "#", price: "£260.00" },
	{
		service: "Deep Vein Thrombosis - Single Arm | DVT Ultrasound",
		slug: "#",
		price: "£290.00",
		subtitle: "+£160 for Both Arms",
	},
	{
		service: "Deep Vein Thrombosis - Single Leg | DVT Ultrasound",
		slug: "#",
		price: "£290.00",
		subtitle: "+£160 for Both Legs",
	},
	{ service: "Hernia", slug: "#", price: "£260.00" },
	{ service: "Kidneys & Urinary Tract", slug: "#", price: "£260.00" },
	{ service: "Liver & Gallbladder", slug: "#", price: "£260.00" },
	{ service: "Lumps, Bumps and Soft Tissue", slug: "#", price: "£260.00" },
	{ service: "Male Breast", slug: "#", price: "£280.00" },
	{ service: "Male Health Check", slug: "#", price: "£460.00" },
	{ service: "Neck", slug: "#", price: "£280.00" },
	{ service: "Testes / Scrotum", slug: "#", price: "£250.00" },
	{ service: "Thyroid", slug: "#", price: "£280.00" },
];

export const muscleJointPriceList: Price[] = [
	{
		service: "Ankle",
		slug: "#",
		price: "£280.00",
		subtitle: "An additional £180 to scan both Ankles",
	},
	{
		service: "Calf",
		slug: "#",
		price: "£280.00",
		subtitle: "An Additional £180 to scan both Calves",
	},
	{
		service: "Elbow & Forearm",
		slug: "#",
		price: "£280.00",
		subtitle: "An additional £180 to scan both Elbows & Forearms",
	},
	{
		service: "Foot",
		slug: "#",
		price: "£280.00",
		subtitle: "An Additional £180 to scan both Feet",
	},
	{
		service: "Hand & Wrist",
		slug: "#",
		price: "£280.00",
		subtitle: "An additional £180 to scan both Hands & Wrists",
	},
	{ service: "Hip", slug: "#", price: "£280.00" },
	{
		service: "Knee",
		slug: "#",
		price: "£280.00",
		subtitle: "An Additional £180 to scan both Knees",
	},
	{
		service: "Shoulder",
		slug: "#",
		price: "£280.00",
		subtitle: "An Additional £180 to scan both Shoulders",
	},
];

export const transportRoutes: TransportRoute[] = [
	{
		id: 1,
		title: "Public Transport",
		description:
			"The following public transport lines have routes that pass near our Harley Street Clinic",
		icon: "https://images.ctfassets.net/1w1x9dft88u5/5ZZOf09Xw3onmx4CFy0aO6/048992811711f240f596fadf139ac688/04db66c4-tfl-logo.png",
		routes: [
			{
				id: 1,
				text: "Bus: 113, 13, 18, 30, 453, 74, 758, 88, 94",
				icon: "https://images.ctfassets.net/1w1x9dft88u5/5a1Z3kYA2ApRrN1duCd0u5/ec599f8322c79d29e61369930c54dbe9/d805801e-red-bus.png",
			},
			{
				id: 2,
				text: "Train: CHILTERN RAILWAYS, OVERGROUND, THAMESLINK, WEST MIDLANDS TRAINS",
				icon: "https://images.ctfassets.net/1w1x9dft88u5/QpcAxfyw0etwkhIhw8NGh/02040a0306833bed7ddcb20e2e418857/75333f8a-national-rail.png",
			},
			{
				id: 3,
				text: "Underground: CENTRAL, METROPOLITAN, NORTHERN, VICTORIA",
				icon: "https://images.ctfassets.net/1w1x9dft88u5/6xAhHaEblyFIIERYOS3hqv/004b318cc7a52c3984cb73213f6267aa/63e3a0c9-underground.png",
			},
		],
	},
	{
		id: 2,
		title: "By Car",
		description:
			"London has a Congestion Charge (which applies from 0700 hrs to 2200 hrs 7 days a week and requires drivers to pay £11.50 per day if they wish to continue driving in central London during these hours)",
		icon: "https://images.ctfassets.net/1w1x9dft88u5/6eXR1vRROeUCBMtWMVOTg/35c7274f3c02fb404cdc9c0af6015778/b6872e97-london-parking-sign.png",
		sections: [
			{
				id: 1,
				title: "Parking spaces",
				description: `<p>A parking space can usually be found in the Harley Street/Wimpole Street area. Charges are £4.90 per hour from 8:30am to 6:30pm Monday to Saturday. There is a maximum stay of four hours. Payment can be made by cash or credit card using the ticket machines, or by telephone or SMS text.</p>`,
			},
			{
				id: 2,
				title: "Car Parks",
				description: `<p>There are two 24 hour car parks located very close to Harley Street.&nbsp;<a href="https://www.q-park.co.uk/en-gb/cities/london/harley-street/">Q-Park</a>&nbsp;provide safe, secure and reliable parking throughout central London and their Harley Street car park is open 24 hours and is located in Queen Anne Mews, W1G 9HF.To get an idea of costs, one hour parking is £7.50, and 24 hours is £41.There is another larger car park located at&nbsp;<a href="https://www.q-park.co.uk/en-gb/cities/london/oxford-street/">Cavendish Square</a>, W1G OPN again open 24 hours. Short term parking can be found on the surrounding streets. The Harley Street area is within the&nbsp;<a href="https://tfl.gov.uk/modes/driving/congestion-charge?cid=pp020">Congestion Charging Zone</a>&nbsp;which can be paid online or by phone.</p>`,
			},
		],
	},
];
