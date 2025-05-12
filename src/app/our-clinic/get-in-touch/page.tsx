import BookingCard from "@/components/core/BookingCard";
import CallCard from "@/components/core/CallCard";
import MessageCard from "@/components/core/MessageCard";
import Spacer from "@/components/core/Spacer";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/sections/PageHero";
import SocialCta from "@/components/sections/SocialCta";
import type { Theme } from "@/types/colors";

export default function Page() {
	const pageData = {
		theme: "blue",
		bgImage:
			"https://images.ctfassets.net/1w1x9dft88u5/127WBFixfv0mDGhGGVi4zd/80a411b1219ebe864865b90de9de034e/private-ultrasound-clinic-london-harley-street-ultrasound-bg-1.webp",
		heading: "Get In Touch",
		description: `<p>There are lots of ways you can get in touch with one of our friendly, knowledgeable team at a time and in a way that suits you.</p>`,
		contact: {
			title: "Fast and simple",
			description:
				"You can use our contact form to send a request to one of our friendly, knowledgeable team. We’ll get back to you with an answer as soon as possible.",
			buttonText: "Send message",
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
				<section className="container mx-auto mt-10 relative z-10 lg:-translate-y-40">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
						<BookingCard theme={theme} />
						<MessageCard />
						<CallCard />
					</div>
				</section>
				<ContactForm
					title={pageData.contact.title}
					description={pageData.contact.description}
					buttonText={pageData.contact.buttonText}
				/>
				<Spacer mobileHeight="80px" desktopHeight="120px" />
				<SocialCta bgImage="/images/follow-us-on-social-media-harley-street-ultrasound.png" />
			</main>
		</>
	);
}
