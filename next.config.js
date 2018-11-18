const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const isCI = process.env.CI;

module.exports = withBundleAnalyzer(
  Object.assign({
    analyzeBrowser: process.env.BUNDLE_ANALYZE || isCI,
    openAnalyzer: !isCI,
    bundleAnalyzerConfig: {
      excludeAssets: /tests/g,
      browser: {
        analyzerMode: "static",
        generateStatsFile: true,
        reportFilename: "../bundle-analyzer/report.html",
        statsFilename: "../bundle-analyzer/stats.json"
      }
    }
  })
);
