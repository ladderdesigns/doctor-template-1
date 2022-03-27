/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });
    return cfg;
  },
};
