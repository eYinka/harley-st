import clsx from "clsx";

interface RichTextProps {
	content: string | TrustedHTML;
	classNames?: string;
}

export default function RichText(props: RichTextProps) {
	const { content, classNames } = props;
	return (
		<section
			className={clsx("prose max-w-none", classNames)}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
}
