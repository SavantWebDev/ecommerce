/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
  //     domains: ['https://api-n56x.onrender.com'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'api-n56x.onrender.com',
      port: '',
      pathname: '/uploads/**',
    },
    {
      protocol: 'https',
      hostname: 'api-n56x.onrender.com',
      port: '',
      pathname: '/src/image/**',
    },
  ],
  },
        
    }

// (https://api-n56x.onrender.com/src/image/imagemImagem.png)
module.exports = nextConfig
