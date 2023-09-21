/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const nextConfig = {
    output: 'export',
    basePath: isProd ? "/react-portfolio" : undefined,
    images: { unoptimized: isProd ? false : true},
    assetPrefix: isProd ? "/react-portfolio" : undefined
}

module.exports = nextConfig
