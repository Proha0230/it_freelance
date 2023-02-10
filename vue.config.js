module.exports = ({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/it_freelance/'
    : '/'
})



const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  }
};