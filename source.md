### JSX

JSX并不是只能被编译为React.createElement方法，你可以通过@babel/plugin-transform-react-jsx插件显式告诉Babel编译时需要将JSX编译为什么函数的调用（默认为React.createElement）。
