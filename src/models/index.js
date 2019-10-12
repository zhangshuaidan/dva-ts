// 索引查找当前目录下的所有model 并进行输出
const context = require.context('./', false, /\.(j|t)s$/);
export default context.keys().filter(item => item != './index.js').map(key => context(key))