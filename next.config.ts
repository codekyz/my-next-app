const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'my-next-app';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}` : '',
};

export default nextConfig;
