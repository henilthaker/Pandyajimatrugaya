/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'],
  },
  env:{
    APIKEY: process.env.APIKEY,
    FOLDERID: process.env.FOLDERID
  }
}

module.exports = nextConfig
