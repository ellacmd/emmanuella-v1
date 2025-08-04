import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
              source: '/:path*',
              has: [
                {
                  type: 'host',
                  value: 'emmanuella.dev',
                },
              ],
              permanent: true,
              destination: 'https://www.emmanuella.dev/:path*',
            },
          ];
      
      },
};


  
  module.exports = nextConfig;
  