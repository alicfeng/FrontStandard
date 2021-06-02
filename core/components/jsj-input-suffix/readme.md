# jsj-input-suffix

input标签后字数显示组件

```tsx
// react写法  入参为property驼峰命名，  vue或者html的入参对应attribute
import { JsjInputSuffix } from '@jsj/react'
```


```html
<div style="position: relative;">
    <input />
    <jsj-input-suffix value="input或者textArea等实时变化的值" max-length="20" />
</div>
```

<div style="position: relative; ">
  <input />
  <jsj-input-suffix max-length="20"/>
</div>

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `maxLength` | `max-length` | 最大输入字数      | `number` | `undefined` |
| `value`     | `value`      | 显示值         | `string` | `undefined` |


----------------------------------------------

@jsj/core，一个强大的组件库
