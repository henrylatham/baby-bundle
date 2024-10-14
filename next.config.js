const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
      "localhost",
      "m.media-amazon.com",
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.json$/,
      loader: 'json-loader',
      type: 'javascript/auto'
    });

    return config;
  },
};

module.exports = nextConfig;