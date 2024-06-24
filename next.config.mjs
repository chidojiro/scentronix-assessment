/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/recipes',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
