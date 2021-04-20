const { build } = require("esbuild");
const production = process.env.NODE_ENV === `production` // true when NODE_ENV is production

module.exports = (eleventyConfig) => {

  // ensure we refresh the browser when scripts, styles or the tailwind config changes.
  eleventyConfig.addWatchTarget("./src/scripts/");
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  // use esbuild to compile our JavaScript
  eleventyConfig.on("beforeBuild", () => {
    build({
      entryPoints: ["./src/scripts/main.js"],
      outfile: "dist/scripts/main.js",
      bundle: true,
      minify: production,
    }).catch(() => process.exit(1));

  });

  return {
    dir: {
      input: "src",
      output: 'dist',
    },
  };
};
