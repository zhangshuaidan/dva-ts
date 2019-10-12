export default {
  entry: {
    index: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'dva',
      'react-router',
      'prop-types',
      'lodash',
      'classnames',
    ],
    antd: [
      'antd'
    ]

  },
  hash: true,
  commons: [
    {
      names: ['vendor', 'antd'],   /* 对应上面的提取的公共文件模块  */
      minChunks: Infinity
    }
  ],

  extraBabelPlugins: [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }],
    ["module-resolver", {
       "alias": {
         "@": "./src"
       }
    }]
  ],
  es5ImcompatibleVersions: true,
  html: {
    "template": "./src/index.ejs"
  }
 
}