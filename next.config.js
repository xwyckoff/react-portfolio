/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const nextConfig = {
    output: 'export',
    basePath: isProd ? "/react-portfolio" : "",
    images: { unoptimized: isProd ? true : false }
}

module.exports = nextConfig
