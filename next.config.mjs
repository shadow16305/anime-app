/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.flawlessfiles.com",
      "gogocdn.net",
      "s4.anilist.co",
      "i.ytimg.com",
      "media.kitsu.io",
      "artworks.thetvdb.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          net: false,
          dns: false,
          tls: false,
          fs: false,
          request: false,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
