// @ts-check

const _getPublicEnv = (prefix) => {
  const envs = process.env;
  const res = {};

  Object.keys(envs).forEach((k) => {
    if (k.startsWith(prefix)) {
      res[k] = envs[k];
    }
  });

  return res;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  publicRuntimeConfig: {
    ..._getPublicEnv('NEXT_PUBLIC_'),
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;
