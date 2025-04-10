import clsx from "clsx";

interface BottomCurveProps {
	classNames?: string;
}

export default function BottomCurve(props: BottomCurveProps) {
	const { classNames } = props;
	return (
		<div className={clsx("absolute -bottom-4 w-full hidden md:block", classNames)}>
			<svg
				x="0px"
				y="0px"
				viewBox="0 0 1920 53"
				fill="#fff"
			>
				<path d="M0-0.43v53.51h1920V-0.43C1594.37,27.2,1268.75,40.78,943.16,40.3C628.75,39.83,314.37,26.25,0-0.43z"></path>
			</svg>
		</div>
	);
}
