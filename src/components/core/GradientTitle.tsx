import clsx from "clsx";

interface GradientTitleProps {
	title?: string;
	subtitle?: string;
	titleClassNames?: string;
	subtitleClassNames?: string;
}
export default function GradientTitle(props: GradientTitleProps) {
	const { title, subtitle, titleClassNames, subtitleClassNames } = props;

	return (
		<h2>
			{subtitle && (
				<span className={clsx("text-primary-dark font-medium block", subtitleClassNames)}>
					{subtitle}
				</span>
			)}

			{title && (
				<span
					className={clsx(
						"gradient_bg  text-transparent bg-clip-text font-medium leading-14",
						titleClassNames,
					)}
				>
					{title}
				</span>
			)}
		</h2>
	);
}
