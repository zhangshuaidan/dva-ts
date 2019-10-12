import dva from 'dva';
import './index.css';
// import 'antd/dist/antd.less'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
require('./models').default.forEach(model => app.model(model.default));

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
