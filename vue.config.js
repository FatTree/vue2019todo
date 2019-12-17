module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? './': '/', // baseUrl
  assetsDir: "./", // 輸出dist檔後路徑位子，這邊使用相對路徑，這樣才不會找不到resource
  devServer: {
    port: `${process.env.VUE_APP_PORT}`, // 設定開發(localhost)環境的port
    host: '0.0.0.0',
    proxy: { // 開發環境跨域代理
      "/todoAPI": { // 代理名稱
        target: `${process.env.VUE_APP_JSONSERVER}`, // 跨域位置 <===這是API位置
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/todoAPI": "" // 重寫路由 解釋:https://segmentfault.com/q/1010000012607105
        }
      },
    }
  },
};
