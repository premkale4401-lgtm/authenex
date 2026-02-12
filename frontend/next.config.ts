import type { NextConfig } from "next";
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from ../env/.env if it exists (local dev)
// On Vercel, env vars are set via dashboard, so this file won't exist
try {
  dotenv.config({ path: path.resolve(__dirname, '../env/.env') });
} catch (e) {
  // Silently fail - env vars will come from Vercel dashboard in production
}

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
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Externalize packages that cause issues during build
  serverExternalPackages: ['jspdf', 'image-size'],
};

export default nextConfig;