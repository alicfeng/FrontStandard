jsj团队通用组件+公共样式+公共方法+常量的超级强大库

## 安装及更新
```bash
npm i --save jsj-common@latest
```

## 使用
1. 通用组件引入(只需要一次引入即可在页面中全局使用)
    - 在react或者vue项目入口文件加入此代码
    ```js static
      import 'jsj-common/components'
    ```
    - 在纯原生html页面 
        > 现代浏览器支持原生`import`语法，不过需要注意`script`的类型`type="module"`。

    ```js static
      <script type="module">
        import './node_modules/jsj-common/components/index.js';
      </script>
    ```

2. 公共样式使用
    - js中使用
      ````js static
      import 'jsj-common/index.css'
      ````
    - less/scss等文件中使用
      ````less static
      @import '~jsj-common/index.css';
      ````

