## 文件引入

````js static
import 'jsj-common/dist/utils'
````

# loadScript  
动态添加script标签到html上(js动态加载)
```js static
  loadScript('第三方js库的cdn url', () => {
    console.log('当前js库加载完成')
  })
```
# loadStyle
动态添加link标签到html上(css动态加载)
```js static
  loadStyle('第三方js库的样式库cdn url', () => {
    console.log('当前js库的样式库cdn url加载完成')
  })
```
# isIE
```js static
  isIE()   // 返回true或false
```
# checkIEVersion
```js static
  checkIEVersion()   // 返回number  如10 代表ie 10   如 -1 则不为ie浏览器
```