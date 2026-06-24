const CracoLessPlugin = require('craco-less')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const slash = require('slash2')
const isAnalyzeMode = process.argv.includes('--analyze')

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // 开发环境：最小化配置，保证启动速度
      if (env === 'development') {
        webpackConfig.devtool = 'cheap-module-source-map';
        // 开发环境不拆分 chunk，避免 HMR 问题
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: false, // 或保持默认
        };
      }
      
      if (env === 'production') {
        // 确保构建时生成 source map
        webpackConfig.devtool = 'source-map'
        // 核心拆包配置
        webpackConfig.optimization = {
          ...webpackConfig?.optimization, // 保留 CRA 默认的 optimization 配置
          splitChunks: {
            chunks: 'all', // 关键：同时拆分同步加载和异步加载的模块
            minSize: 10000, // 拆分后生成的 chunk 最小体积（字节），防止拆出过小的碎片文件
            maxAsyncRequests: 30, // 按需加载时的最大并行请求数
            maxInitialRequests: 30, // 入口点的最大并行请求数
            cacheGroups: {
              // 1. 拆分 node_modules 中的第三方库
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: 10, // 优先级
                reuseExistingChunk: true // 如果当前 chunk 包含已拆分出的模块，则重用，不生成新模块
              },
              // 2. 拆分项目中被多处引用的公共业务模块
              common: {
                name: 'common',
                minChunks: 2, // 至少被 2 个 chunk 引用时才拆分
                priority: 5,
                reuseExistingChunk: true
              }
            }
          }
        }
      }
      return webpackConfig
    },
    plugins: [
      // 将分析插件添加到 webpack 插件列表中
      isAnalyzeMode &&
        new BundleAnalyzerPlugin({
          analyzerMode: 'server', // 启动一个HTTP服务器来展示报告
          analyzerHost: '127.0.0.1', // 服务器主机
          analyzerPort: 8888, // 服务器端口
          openAnalyzer: true // 构建完成后自动在浏览器中打开报告
        })
    ].filter(Boolean)
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: {
            getLocalIdent: (context, localIdentName, localName) => {
              if (
                context.resourcePath.includes('node_modules') ||
                context.resourcePath.includes('ant.design.pro.less') ||
                // umi 的 global.less 约定不使用 css-module
                context.resourcePath.includes('global.less')
              ) {
                return localName
              }

              // 将 uuid 的类名转化为 antd-pro-文件路径的样式。
              // 类似.antd-pro-components-global-footer-index-links
              const match = context.resourcePath.match(/src(.*)/)
              if (match && match[1]) {
                const antdProPath = match[1].replace('.less', '')
                const arr = slash(antdProPath)
                  .split('/')
                  .map((a) => a.replace(/([A-Z])/g, '-$1'))
                  .map((a) => a.toLowerCase())
                return `antd-pro${arr.join('-')}-${localName}`.replace(
                  /--/g,
                  '-'
                )
              }
              return localName
            }
          }
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
