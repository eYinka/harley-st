interface SpacerProps {
	mobileHeight?: string;
	desktopHeight?: string;
}
export default function Spacer(props: SpacerProps) {
	const { mobileHeight, desktopHeight } = props;
	return (
		<>
			<div className="hidden md:block" style={{ height: desktopHeight || 0 }}></div>
			<div className="block md:hidden" style={{ height: mobileHeight || 0 }}></div>
		</>
	);
}
