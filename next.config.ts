import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
				port: "",
				pathname: "/**",
			},
			{ protocol: "https", hostname: "places.googleapis.com" },
		],
	},
};

export default nextConfig;
