const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 1. 导出一个箭头函数，参数为env,argv
module.exports = (env, argv) => {
  // 2. 声明一个配置的对象config
  const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'build.js',
    },
    devServer: {
      // 指定加载内容的路径
      static: path.resolve(__dirname, 'dist'),

      // 启用 gzip 压缩
      compress: true,

      // 端口号
      port: 8888,

      // 启动自动更新（禁用 hot）
      liveReload: true,

      // 配置代理：解决接口跨域问题
      proxy: {
        '/api': {
          target: 'https://api.github.com',
          pathRewrite: {
            '^/api': '',
          },
          changeOrigin: true,
        },
      },
    },
    // 配置目标
    target: 'web',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              // 调整打包后的css资源路径
              options: {
                publicPath: '../',
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset',
          // 如果文件小于 8kb，则使用 asset/inline 类型
          // 如果文件大于 8kb，则使用 asset/resource 类型
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024, // 限制于 8kb
            },
          },
          generator: {
            filename: 'image/[name][ext]',
          },
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/i,
          // 如果文件小于 8kb，则使用 asset/inline 类型
          // 如果文件大于 8kb，则使用 asset/resource 类型
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024,
            },
          },
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style/[name].css',
      }),
      // 用于生成 index.html
      new HtmlWebpackPlugin({
        // 指定打包后的文件名称
        filename: 'index.html',
        // 用来指定，生成 HTML 的模板
        template: './src/index.html',
        // 指定 HTML 中使用的变量
        title: '关于我们',
        // 不压缩
        minify: false,
      }),
      // 直接将 src 下，不需要特殊处理的文件，直接复制到输出目录中
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve(__dirname, './src/public'), to: 'public' }],
      }),
    ],
  };
  // 3.判断当前是否是生产环境打包
  if (env.production) {
    // 4.单独修改生产环境下的配置
    config.mode = 'production';
    config.plugins = [
      new MiniCssExtractPlugin({
        filename: 'style/[name].css',
      }),

      // 压缩 CSS
      new OptimizeCssAssetsPlugin(),

      // 用于生成 index.html
      new HtmlWebpackPlugin({
        // 指定打包后的文件名称
        filename: 'index.html',
        // 用来指定，生成 HTML 的模板
        template: './src/index.html',
        // 指定 HTML 中使用的变量
        title: '关于我们',
      }),
      // 直接将 src 下，不需要特殊处理的文件，直接复制到输出目录中
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/public',
            to: 'public',
          },
        ],
      }),
    ];
  }
  return config;
};
