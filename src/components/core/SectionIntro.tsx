import type { Theme } from "@/types/colors";
import GradientTitle from "./GradientTitle";
import RichText from "./RichText";

interface SectionIntroProps {
	title: string;
	subtitle: string;
	content?: string | TrustedHTML;
	theme?: Theme;
}

export default function SectionIntro(props: SectionIntroProps) {
	const { title, subtitle, content, theme } = props;

	return (
		<section className="container mx-auto">
			<GradientTitle
				title={title}
				subtitle={subtitle}
				titleClassNames="text-4xl lg:text-5xl text-center block mb-2"
				subtitleClassNames="text-3xl lg:text-4xl text-center"
				gradientType={theme}
			/>
			{content && (
				<RichText
					content={content}
					classNames="text-center not-prose text-xl space-y-4"
				/>
			)}
		</section>
	);
}
