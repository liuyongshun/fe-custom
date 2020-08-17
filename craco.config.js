/* craco.config.js */
const path = require('path');
let public_path = '/'

const pathResolve = pathUrl => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@pages': pathResolve('src/pages'),
      "@store": pathResolve('src/store'),
      '@utils': pathResolve('src/utils')
    },
    configure: {
      output: {
        publicPath: public_path
      }
    },
    plugins: []
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  },
  plugins: [
    {
      plugin: [],
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@bg-color': '#fff', // 全局主色
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
