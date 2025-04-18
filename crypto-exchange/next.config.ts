import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['s2.coinmarketcap.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // ❗ Vercel deploy'da lint hatalarını yok say
  },
};

export default nextConfig;
