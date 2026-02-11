import type { NextConfig } from "next";
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from ../env/.env
dotenv.config({ path: path.resolve(__dirname, '../env/.env') });

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;