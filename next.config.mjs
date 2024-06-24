/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/recipes/categories',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
