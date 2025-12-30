import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //configuração para mostrar todos as requisições no navegador, principalmente as do servidor do next
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
