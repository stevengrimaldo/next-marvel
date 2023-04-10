/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // Enabled by default.
      // cssProp?: boolean,
      // setting this will override the default for all environments.
      displayName: false,
      // Enabled by default.
      // fileName?: boolean,
      // Defaults to ["index"].
      // meaninglessFileNames?: string[],
      // Not supported yet.
      // minify?: boolean,
      // Empty by default.
      // namespace?: string,
      // Not supported yet.
      // pure?: boolean,
      // Enabled by default.
      // ssr?: boolean,
      // Empty by default.
      // topLevelImportPaths?: string[],
      // Not supported yet.
      // transpileTemplateLiterals?: boolean,
    },
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.annihil.us'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
