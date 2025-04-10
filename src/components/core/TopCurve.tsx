import clsx from "clsx";

interface TopCurveProps {
	classNames?: string;
}

export default function TopCurve(props: TopCurveProps) {
	const { classNames } = props;
	return (
		<div className={clsx("absolute top-0 w-full hidden md:block z-1", classNames)}>
			<svg x="0px" y="0px" viewBox="0 0 1920 53" fill="#fff">
				<path d="M0,0h1920v26.5c-309.11,17.1-618.23,25.93-927.36,26.51C661.78,53.64,330.89,44.8,0,26.5C0,17.67,0,8.83,0,0z"></path>
			</svg>
		</div>
	);
}
