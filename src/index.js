import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory  } from 'history';


// 1. Initialize
const app = dva({
    history: createHistory(),
  });
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
//自定义引入所有的model
require("./models").default.forEach(key=>app.model(key.default));

// 引入自己的model
//app.model(require("./models/product").default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
