/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
  //     domains: ['https://api-n56x.onrender.com'],
  remotePatterns: [
    {
      protocol: 'http',
      hostname: '20.197.251.208',
      port: '',
      pathname: '/uploads/**',
    },
    {
      protocol: 'http',
      hostname: '20.197.251.208',
      port: '',
      pathname: '/src/image/**',
    },
  ],
  },
        
    }

// (https://api-n56x.onrender.com/src/image/imagemImagem.png)
module.exports = nextConfig
