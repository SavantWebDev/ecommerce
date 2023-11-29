/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'https://app.requestly.io',
              port: '',
              pathname: '/delay/5000',
            },
          ],
    }
}

module.exports = nextConfig
