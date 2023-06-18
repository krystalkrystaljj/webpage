const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config =>{
    config.plugin('html').tap(args => {
        args[0].title = '太极遥感图像分析平台';
        return args;
    })
  },
})
