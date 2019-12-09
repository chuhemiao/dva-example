### react dva antd umi 学习

###　dva安装和使用


+ `npm install dva-cli -g`
+ 检测版本 `dva -v`

+ 创建一个新项目 ： `dva new dva-quickstart`


### 编译步骤

+ 安装npm依赖包    `npm install`
+ 调试  `npm start`

+ 打包发布 `npm build`

+ redux 和 redux-saga 的集成方案  为了方便快速开发  并使用antd ui 

+ 特性
    - 易学易用，仅有 6 个 api，对 redux 用户尤其友好，配合 umi 使用后更是降低为 0 API
    - elm 概念，通过 reducers, effects 和 subscriptions 组织 model
    - 插件机制，比如 dva-loading 可以自动处理 loading 状态，不用一遍遍地写 showLoading 和 hideLoading
    - 支持 HMR，基于 babel-plugin-dva-hmr 实现 components、routes 和 models 的 HMR


### route  配置路由

+ 路由跳转页面的三种方式 : 使用Link ，使用`this.props.history.push("/")`,使用dva/router的routerRedux.push

### 模拟数据

+ untils 下 request.js 请求网络数据
+ mock 

### 主入口文件


+ `src 下 index.js`

### antd ui

+ `npm install antd --save`

+ 单个引入组件  `import { DatePicker } from "antd"`
+ 使用方式 `ReactDOM.render(<DatePicker />, mountNode)`;


+ 引入样式： `import 'antd/dist/antd.css'  or 'antd/dist/antd.less'`
+ 按需加载插件 :  `babel-plugin-import`
 

### redux-actions 简化数据加载和接口管理方便

+ https://redux-actions.js.org/api/createaction

### 切换history模式

+ `npm install --save history`
+ 路由原理  =》 模式1，#号是锚点模式
+ 模式2，h5的history api 去除#号模式


### componets  

+ 这里是实现ui组件目录

+  组件与组件之间使用 this.props.xxx  传递值 




