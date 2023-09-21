/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const nextConfig = {
    output: 'export',
    basePath: "/react-portfolio"
}

module.exports = nextConfig
