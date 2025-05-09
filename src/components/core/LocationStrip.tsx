import Image from "next/image";

export default function LocationStrip() {
	return (
		<div className="mt-8 pb-2 flex justify-center md:pb-0 md:block">
			<a
				target="_blank"
				href="https://maps.app.goo.gl/9Jy2ebponAscWTxQ9"
				className=" cursor-pointer z-10"
			>
				<div className="w-fit px-3 py-4 flex items-center gap-4 rounded-xl bg-white card-shadow">
					<div className="size-6 relative">
						<Image
							src="https://images.ctfassets.net/1w1x9dft88u5/3i3YZfNz9TypCWt1VsPbAR/b6319d9bdcd4882f1cfbd9ad7d21976c/logos_google-maps.png"
							alt="google maps"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
							className="object-contain object-center pointer-events-none"
						/>
					</div>
					<div>
						<p className="text-sm lg:text-lg font-semibold text-primary-600">
							99 Harley St, London W1G 6AQ, United Kingdom
						</p>
					</div>
				</div>
			</a>
		</div>
	);
}
