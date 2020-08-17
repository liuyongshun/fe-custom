/* craco.config.js */
const path = require('path');
const CracoAlias = require("craco-alias");
let public_path = './'

const pathResolve = pathUrl => path.resolve(__dirname, pathUrl);

module.exports = {
  webpack: {
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
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.extend.json'
      }
    },
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
