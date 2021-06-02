jsj团队通用组件+公共样式+公共方法+常量的超级强大库

## 安装及更新
```bash
npm i --save @jsj/core@latest
```

# 兼容性
包括移动端的所有现代浏览器,但不支持IE。

> IE不支持原生customElements，webcomponentsjs可以实现对IE的兼容，不过很多CSS特性仍然无效，所以放弃

## 使用
1. 通用组件引入
  - react项目,直接在页面引入使用
    - 页面使用处(通用组件中的名字Jsj开头，对于-的地方改写为驼峰命名)
      ```tsx
        import { JsjEllipsis } from "@jsj/react"
        const App = () => {
          return (<div>
            <JsjEllipsis value="asdgjhklasg" line="1" />
          </div>)
        }
      ```

  - vue项目引入(分两步)
      - 入口文件处
        ```js static
          import '@jsj/core'
          import { applyPolyfills, defineCustomElements } from '@jsj/core/loader';

          Vue.config.ignoredElements = [/^jsj-\w*/]
          applyPolyfills().then(() => defineCustomElements())
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
        <script type="module" src="./node_modules/@jsj/core/dist/jsj-common/jsj-common.esm.js"></script>
      ```

2. 公共样式使用  入口文件js处使用
````js static
import '@jsj/core/dist/index.css'
````

3. 公共方法使用
````js static
  import '@jsj/core/dist/utils'
````

