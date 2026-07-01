/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
	return [
	  {
		source: '/books',
		destination: '/resources',
		permanent: true,
	  },
	];
  },
};

export default nextConfig;
