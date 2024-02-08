/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //     domains: ['https://iceberg.savantweb.com.br'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iceberg.savantweb.com.br",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "iceberg.savantweb.com.br",
        port: "",
        pathname: "/src/image/**",
      },
    ],
  },
};

// (https://iceberg.savantweb.com.br/src/image/imagemImagem.png)
module.exports = nextConfig;
