import clsx from "clsx";

interface GradientButtonProps {
	text: string;
	classNames?: string;
}

export default function GradientButton(props: GradientButtonProps) {
	const { text, classNames } = props;

	return (
		<button
			className={clsx(
				"gradient_bg bg-gradient-to-r from-primary-alt from-50% to-secondary text-white font-semibold py-3 px-6 rounded-4xl hover:bg-fixed transition-all cursor-pointer",
				classNames,
			)}
		>
			{text}
		</button>
	);
}
