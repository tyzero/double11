// vue.config.js
// 这里是全部配置
// https://github.com/vuejs/vue-cli/tree/dev/docs/config

// https://phoebecodespace.github.io/2018/04/19/vue-cli-3-briefly-analyzes/#%E5%8A%9F%E8%83%BD%E9%85%8D%E7%BD%AE


if (process.env.NODE_ENV === 'production') {
  module.exports = {
    // options...
    baseUrl: '/double1111/',
    outputDir: 'docs',
    productionSourceMap: false,
  }
} else {
  module.exports = {
    configureWebpack: {}
  }
}
