"use client";

import {
	AdvancedMarker,
	APIProvider,
	Map as GMap,
	InfoWindow,
	useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Map() {
	const [showInfoWindow, setShowInfoWindow] = useState(true);
	const [placeDetails, setPlaceDetails] = useState<google.maps.places.Place | null>(null);
	const coordinates = { lat: 51.520658, lng: -0.1480468 };
	const [markerRef, marker] = useAdvancedMarkerRef();

	// clicking the marker will toggle the infowindow
	const handleMarkerClick = useCallback(() => setShowInfoWindow((prev) => !prev), []);
	const handleClose = useCallback(() => setShowInfoWindow(false), []);

	const placeId = "ChIJw_I2U3YbdkgRI2YAmQ5z3pI"; // Replace with your actual place ID

	useEffect(() => {
		const fetchPlaceDetails = async () => {
			// This needs to run on the client side where Google Maps API is loaded
			const { Place } = (await google.maps.importLibrary(
				"places",
			)) as google.maps.PlacesLibrary;

			const place = new Place({
				id: placeId,
			});

			await place.fetchFields({
				fields: ["displayName", "rating", "userRatingCount", "photos"],
			});

			// Log the result
			setPlaceDetails(place);
		};

		fetchPlaceDetails();
	}, [placeId]);

	const coverPhoto = placeDetails?.photos?.[0].getURI({
		maxWidth: 400,
		maxHeight: 400,
	});

	return (
		<APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
			<GMap
				defaultCenter={coordinates}
				defaultZoom={19}
				gestureHandling={"cooperative"}
				mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID!}
				disableDefaultUI={true}
			>
				<AdvancedMarker
					ref={markerRef}
					position={coordinates}
					onClick={handleMarkerClick}
				/>
				{showInfoWindow && (
					<InfoWindow anchor={marker} onClose={handleClose}>
						<div className="max-w-[300px] lg:max-w-[400px]">
							<div className="w-full h-[150px] mb-2 relative">
								{coverPhoto && (
									<Image
										src={coverPhoto!}
										alt={placeDetails?.displayName || ""}
										fill
									/>
								)}
							</div>
							<h3 className="text-xl lg:text-2xl text-black font-medium mb-2">
								{placeDetails?.displayName}
							</h3>
							<div className="flex gap-3 items-center mb-3">
								<p className="lg:text-2xl font-semibold text-[#4c5550]">
									{placeDetails?.rating}
								</p>
								<div className="flex">
									{[...Array(Math.ceil(placeDetails?.rating || 0))].map(
										(_, index) => (
											<svg
												key={index}
												width="28"
												height="28"
												viewBox="0 0 28 28"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M15.6223 6.00672L17.2673 9.29672C17.489 9.75172 18.084 10.1834 18.5857 10.2767L21.5607 10.7667C23.4623 11.0817 23.9057 12.4584 22.5407 13.835L20.219 16.1567C19.834 16.5417 19.6123 17.3 19.7407 17.8484L20.4057 20.7184C20.9307 22.9817 19.7173 23.8684 17.7223 22.6784L14.934 21.0217C14.4323 20.7184 13.5923 20.7184 13.0907 21.0217L10.3023 22.6784C8.30733 23.8567 7.094 22.9817 7.619 20.7184L8.284 17.8484C8.389 17.2884 8.16733 16.53 7.78233 16.145L5.46066 13.8234C4.09566 12.4584 4.539 11.0817 6.44066 10.755L9.41567 10.265C9.91733 10.1834 10.5123 9.74005 10.734 9.28505L12.379 5.99505C13.2773 4.22172 14.724 4.22172 15.6223 6.00672Z"
													fill="url(#paint0_linear_0_28653)"
												></path>
												<defs>
													<linearGradient
														id="paint0_linear_0_28653"
														x1="6.2469"
														y1="12.1777"
														x2="23.1437"
														y2="13.6338"
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#4CCFB8"></stop>
														<stop offset="1" stopColor="#0E9B8C"></stop>
													</linearGradient>
												</defs>
											</svg>
										),
									)}
								</div>
								<p className="lg:text-2xl font-semibold text-[#4c5550]">
									({placeDetails?.userRatingCount})
								</p>
							</div>
							<p className="lg:text-xl font-medium text-[#a9b6af] mb-2">
								Medical diagnostic imaging center
							</p>
						</div>
					</InfoWindow>
				)}
			</GMap>
		</APIProvider>
	);
}
