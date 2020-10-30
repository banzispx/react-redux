const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");
 
//  https://ant.design/docs/react/customize-theme-cn antd 样式链接
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
  }),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" }
  // })
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { 
        "@primary-color": "#1DA57A",
        "@link-color": "#1890ff", // 链接色
        "@success-color": "#52c41a", // 成功色
        "@warning-color": "#faad14", // 警告色
        "@error-color": "#f5222d", // 错误色
        "@font-size-base": "14px", // 主字号
        "@heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
        "@text-color": "rgba(0, 0, 0, 0.65)", // 主文本色
        "@text-color-secondary": "rgba(0, 0, 0, 0.45)", // 次文本色
        "@disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
        "@border-radius-base": "2px", // 组件/浮层圆角
        "@border-color-base": "#d9d9d9", // 边框色
        "@box-shadow-base": "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)" 
      }
    },
  })
);