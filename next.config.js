/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com", "localhost:3000"],
	},
	env: {
		API: "https://resifib.cyclic.app/api/",
	},
};

module.exports = nextConfig;
