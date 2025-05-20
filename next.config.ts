import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/websitelaunch' : '',
  assetPrefix: isProd ? '/websitelaunch/' : '',
};

export default nextConfig;
