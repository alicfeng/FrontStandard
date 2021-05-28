jsj团队通用组件+公共样式+公共方法+常量的超级强大库

## 安装及更新
```bash
npm i --save jsj-common@latest
```

# 兼容性
包括移动端的所有现代浏览器,但不支持IE。

> IE不支持原生customElements，webcomponentsjs可以实现对IE的兼容，不过很多CSS特性仍然无效，所以放弃

## 使用
1. 通用组件引入(只需要一次引入即可在页面中全局使用)
    - react项目引入（分两步）
        - 入口文件处
          ```jsx
            import 'jsj-common'
            import { applyPolyfills, defineCustomElements } from 'jsj-common/loader';

            applyPolyfills().then(defineCustomElements)
          ```
        - 页面使用处
          > typescript语法需要下载webcomponents-in-react模块包
          ```tsx
            import {adapt} from "webcomponents-in-react"

            const Ellipsis = adapt('jsj-ellipsis')  // adapt里面的组件名需要完全和通用组件名保持一致

            const App = () => {
              return (<div>
                <Ellipsis value="asdgjhklasg" />
              </div>)
            }
          ```
          > 也可以简单粗暴得使用但是需要加ts-ignore标识
           ```tsx
            const App = () => {
              return (<div>
                {* @ts-ignore *}
                <jsj-ellipsis value="asdgjhklasg" />
              </div>)
            }
          ```

    - vue项目引入(分两步)
        - 入口文件处
          ```js static
            import 'jsj-common'
            import { applyPolyfills, defineCustomElements } from 'jsj-common/loader';

            Vue.config.ignoredElements = [/^jsj-\w*/]
            applyPolyfills().then(defineCustomElements)
          ```
        - 页面使用处
          直接在页面中使用
          ```vue
            <template>
              <div>
                <jsj-ellipsis value="asdkgj" />
              </div>
            </template>
          ```
    - 在纯原生html页面 
        > 现代浏览器支持原生`import`语法，不过需要注意`script`的类型`type="module"`。

      ```js static
        <script type="module">
          import './node_modules/jsj-common/index.js';
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

