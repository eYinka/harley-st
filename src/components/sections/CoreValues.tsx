import GradientTitle from "../core/GradientTitle";

interface CoreValuesProps {
	title: string;
	content: string | TrustedHTML;
	values: {
		id: number;
		title: string;
		description: string | TrustedHTML;
	}[];
}

export default function CoreValues(props: CoreValuesProps) {
	const { title, content, values } = props;
	return (
		<section className="container mx-auto">
			<div className="grid lg:grid-cols-2 gap-6">
				<div className="flex flex-col justify-center items-start">
					<GradientTitle title={title} titleClassNames="text-4xl lg:text-5xl" />
					<div
						className="text-xl text-primary-dark mt-6 tracking-wide space-y-4"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
				<div></div>
			</div>
		</section>
	);
}
