/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_SITE_KEY: process.env.NEXT_PUBLIC_SITE_KEY,
    NEXT_PUBLIC_MAIN_FRONTEND_URL: process.env.NEXT_PUBLIC_MAIN_FRONTEND_URL
  }
}

module.exports = nextConfig
