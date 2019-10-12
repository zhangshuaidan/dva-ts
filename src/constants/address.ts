let host = 'https://ant-design-pro.netlify.com'

if(process.env.NODE_ENV === 'production'){
  // 生产环境地址
  host = 'https://177h27l110.iok.la'
}else if(process.env.NODE_ENV === 'development'){
 // 开发环境地址
  host = 'https://ant-design-pro.netlify.com'
}


 export default {
  // 本地服务器地址
  API_HOST: host,
 }