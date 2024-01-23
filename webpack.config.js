const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const PATHS = {
  source: path.join(__dirname, 'node_modules', 'decap-cms', 'dist'),
  target: path.join(__dirname, 'assets', 'decap-cms')
}

module.exports = {
  mode: 'production',
  entry: {},
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(PATHS.source, 'decap-cms.js'), to: path.join(PATHS.target, 'index.js') },
      ],
    }),
  ]
};
