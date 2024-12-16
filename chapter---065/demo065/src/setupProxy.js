const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:7788', // 后端服务器地址
            changeOrigin: true,             // 是否改变请求头中的 Host
            pathRewrite: {'^/api': ''},   // 可选：重写路径，比如将 '/api/xxx' 变为 '/xxx'
        })
    );

    app.use(
        '/auth',
        createProxyMiddleware({
            target: 'http://localhost:4000',
            changeOrigin: true,
        })
    );
};