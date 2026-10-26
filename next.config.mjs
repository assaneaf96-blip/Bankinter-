/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/index.html',
        },
        {
          source: '/cliente',
          destination: '/cliente.html',
        },
        {
          source: '/admin',
          destination: '/admin.html',
        },
        {
          source: '/login',
          destination: '/cliente.html',
        },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
}

export default nextConfig
