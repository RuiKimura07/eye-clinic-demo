/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out to enable dynamic features like usePathname
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig