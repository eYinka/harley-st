import GradientTitle from "../core/GradientTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../shadcn/accordion";

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
				<div className="flex flex-col items-start">
					<GradientTitle title={title} titleClassNames="text-4xl lg:text-5xl" />
					<div
						className="text-xl text-primary-dark mt-6 tracking-wide space-y-4"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
				<div>
					<Accordion type="single" collapsible>
						{values.map((value) => (
							<AccordionItem
								key={value.id}
								value={`item-${value.id}`}
								className="border-b-0"
							>
								<AccordionTrigger className="text-xl lg:text-3xl text-primary-dark font-normal py-4 cursor-pointer hover:no-underline [&>svg]:fill-current [&>svg]:stroke-white [&>svg]:size-8">
									{value.title}
								</AccordionTrigger>
								<AccordionContent className="text-lg text-gray-500">
									<div dangerouslySetInnerHTML={{ __html: value.description }} className="space-y-4 leading-10"/>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
