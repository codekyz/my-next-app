import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-next-app',
  assetPrefix: '/my-next-app/',
};

export default nextConfig;
