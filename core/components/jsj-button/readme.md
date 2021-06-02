# jsj-button  
```tsx
// react写法  入参为property驼峰命名，  vue或者html的入参对应attribute
import { JsjButton } from '@jsj/react'
```

```html
<!-- type 篇 -->
<div class="m-b-5">
    <jsj-button>默认颜色button</jsj-button>
    <jsj-button is-light>light模式默认颜色button</jsj-button>
    <jsj-button is-outlined>outlined模式默认颜色button</jsj-button>
    <jsj-button is-inverted>inverted模式默认颜色button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="primary">primary type button</jsj-button>
    <jsj-button type="primary" is-light>light模式primary type button</jsj-button>
    <jsj-button type="primary" is-outlined>outlined模式primary type button</jsj-button>
    <jsj-button type="primary" is-inverted>inverted模式primary type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="info">info type button</jsj-button>
    <jsj-button type="info" is-light>light模式info type button</jsj-button>
    <jsj-button type="info" is-outlined>outlined模式info type button</jsj-button>
    <jsj-button type="info" is-inverted>inverted模式info type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="danger">danger type button</jsj-button>
    <jsj-button type="danger" is-light>light模式danger type button</jsj-button>
    <jsj-button type="danger" is-outlined>outlined模式danger type button</jsj-button>
    <jsj-button type="danger" is-inverted>inverted模式danger type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="success">success type button</jsj-button>
    <jsj-button type="success" is-light>light模式success type button</jsj-button>
    <jsj-button type="success" is-outlined>outlined模式success type button</jsj-button>
    <jsj-button type="success" is-inverted>inverted模式success type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="dark">dark type button</jsj-button>
    <jsj-button type="dark" is-light>light模式dark type button</jsj-button>
    <jsj-button type="dark" is-outlined>outlined模式dark type button</jsj-button>
    <jsj-button type="dark" is-inverted>inverted模式dark type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="black">black type button</jsj-button>
    <jsj-button type="black" is-light>light模式black type button</jsj-button>
    <jsj-button type="black" is-outlined>outlined模式black type button</jsj-button>
    <jsj-button type="black" is-inverted>inverted模式black type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="ghost">ghost type button</jsj-button>
    <jsj-button type="ghost" is-light>light模式ghost type button</jsj-button>
    <jsj-button type="ghost" is-outlined>outlined模式ghost type button</jsj-button>
    <jsj-button type="ghost" is-inverted>inverted模式ghost type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="light">light type button</jsj-button>
    <jsj-button type="light" is-light>light模式light type button</jsj-button>
    <jsj-button type="light" is-outlined>outlined模式light type button</jsj-button>
    <jsj-button type="light" is-inverted>inverted模式light type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="link">link type button</jsj-button>
    <jsj-button type="link" is-light>light模式link type button</jsj-button>
    <jsj-button type="link" is-outlined>outlined模式link type button</jsj-button>
    <jsj-button type="link" is-inverted>inverted模式link type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="text">text type button</jsj-button>
    <jsj-button type="text" is-light>light模式text type button</jsj-button>
    <jsj-button type="text" is-outlined>outlined模式text type button</jsj-button>
    <jsj-button type="text" is-inverted>inverted模式text type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="warning">warning type button</jsj-button>
    <jsj-button type="warning" is-light>light模式warning type button</jsj-button>
    <jsj-button type="warning" is-outlined>outlined模式warning type button</jsj-button>
    <jsj-button type="warning" is-inverted>inverted模式warning type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="white">white type button</jsj-button>
    <jsj-button type="white" is-light>white type button</jsj-button>
    <jsj-button type="white" is-outlined>outlined模式white type button</jsj-button>
    <jsj-button type="white" is-inverted>inverted模式white type button</jsj-button>
</div>
```
<div class="m-b-5">
    <jsj-button>默认颜色button</jsj-button>
    <jsj-button is-light>light模式默认颜色button</jsj-button>
    <jsj-button is-outlined>outlined模式默认颜色button</jsj-button>
    <jsj-button is-inverted>inverted模式默认颜色button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="primary">primary type button</jsj-button>
    <jsj-button type="primary" is-light>light模式primary type button</jsj-button>
    <jsj-button type="primary" is-outlined>outlined模式primary type button</jsj-button>
    <jsj-button type="primary" is-inverted>inverted模式primary type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="info">info type button</jsj-button>
    <jsj-button type="info" is-light>light模式info type button</jsj-button>
    <jsj-button type="info" is-outlined>outlined模式info type button</jsj-button>
    <jsj-button type="info" is-inverted>inverted模式info type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="danger">danger type button</jsj-button>
    <jsj-button type="danger" is-light>light模式danger type button</jsj-button>
    <jsj-button type="danger" is-outlined>outlined模式danger type button</jsj-button>
    <jsj-button type="danger" is-inverted>inverted模式danger type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="success">success type button</jsj-button>
    <jsj-button type="success" is-light>light模式success type button</jsj-button>
    <jsj-button type="success" is-outlined>outlined模式success type button</jsj-button>
    <jsj-button type="success" is-inverted>inverted模式success type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="dark">dark type button</jsj-button>
    <jsj-button type="dark" is-light>light模式dark type button</jsj-button>
    <jsj-button type="dark" is-outlined>outlined模式dark type button</jsj-button>
    <jsj-button type="dark" is-inverted>inverted模式dark type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="black">black type button</jsj-button>
    <jsj-button type="black" is-light>light模式black type button</jsj-button>
    <jsj-button type="black" is-outlined>outlined模式black type button</jsj-button>
    <jsj-button type="black" is-inverted>inverted模式black type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="ghost">ghost type button</jsj-button>
    <jsj-button type="ghost" is-light>light模式ghost type button</jsj-button>
    <jsj-button type="ghost" is-outlined>outlined模式ghost type button</jsj-button>
    <jsj-button type="ghost" is-inverted>inverted模式ghost type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="light">light type button</jsj-button>
    <jsj-button type="light" is-light>light模式light type button</jsj-button>
    <jsj-button type="light" is-outlined>outlined模式light type button</jsj-button>
    <jsj-button type="light" is-inverted>inverted模式light type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="link">link type button</jsj-button>
    <jsj-button type="link" is-light>light模式link type button</jsj-button>
    <jsj-button type="link" is-outlined>outlined模式link type button</jsj-button>
    <jsj-button type="link" is-inverted>inverted模式link type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="text">text type button</jsj-button>
    <jsj-button type="text" is-light>light模式text type button</jsj-button>
    <jsj-button type="text" is-outlined>outlined模式text type button</jsj-button>
    <jsj-button type="text" is-inverted>inverted模式text type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="warning">warning type button</jsj-button>
    <jsj-button type="warning" is-light>light模式warning type button</jsj-button>
    <jsj-button type="warning" is-outlined>outlined模式warning type button</jsj-button>
    <jsj-button type="warning" is-inverted>inverted模式warning type button</jsj-button>
</div>
<div class="m-b-5">
    <jsj-button type="white">white type button</jsj-button>
    <jsj-button type="white" is-light>white type button</jsj-button>
    <jsj-button type="white" is-outlined>outlined模式white type button</jsj-button>
    <jsj-button type="white" is-inverted>inverted模式white type button</jsj-button>
</div>

```html
<!-- disabled 属性 -->
<jsj-button>非disabled</jsj-button>
<jsj-button disabled>disabled button</jsj-button>
```

<jsj-button>非disabled</jsj-button>
<jsj-button disabled>disabled button</jsj-button>

```html
<!-- isActive 属性 -->
<jsj-button>非激活</jsj-button>
<jsj-button is-active>激活</jsj-button>
```

<jsj-button>非激活</jsj-button>
<jsj-button is-active>激活</jsj-button>

```html
<!-- isFocused 属性 -->
<jsj-button>非聚焦</jsj-button>
<jsj-button is-focused>聚焦</jsj-button>
```

<jsj-button>非聚焦</jsj-button>
<jsj-button is-focused>聚焦</jsj-button>

```html
<!-- block 属性 -->
<jsj-button>非占据全行</jsj-button>
<jsj-button block>占据全行</jsj-button>
```

<jsj-button>非占据全行</jsj-button>
<jsj-button block>占据全行</jsj-button>

```html
<!-- isHoverd 属性 -->
<jsj-button>非浮动状态</jsj-button>
<jsj-button is-hovered>浮动状态</jsj-button>
```

<jsj-button>非浮动状态</jsj-button>
<jsj-button is-hovered>浮动状态</jsj-button>

```html
<!-- isLoading 属性 -->
<jsj-button>非loading button</jsj-button>
<jsj-button is-loading>loading button</jsj-button>
```

<jsj-button>非loading button</jsj-button>
<jsj-button is-loading>loading button</jsj-button>

```html
<!-- shape 属性 -->
<jsj-button>正常形状 button</jsj-button>
<jsj-button shape="round">round button</jsj-button>
<jsj-button shape="circle">circle</jsj-button>
```

<jsj-button>正常形状 button</jsj-button>
<jsj-button shape="round">round button</jsj-button>
<jsj-button shape="circle">circle</jsj-button>

```html
<!-- isStatic 属性 -->
<jsj-button>非static button</jsj-button>
<jsj-button is-static>static button</jsj-button>
```

<jsj-button>非static button</jsj-button>
<jsj-button is-static>static button</jsj-button>

```html
<!-- size 属性 -->
<jsj-button>默认size button</jsj-button>
<jsj-button size="large">large button</jsj-button>
<jsj-button size="middle">middle button</jsj-button>
<jsj-button size="small">small button</jsj-button>
```

<jsj-button>默认size button</jsj-button>
<jsj-button size="large">large button</jsj-button>
<jsj-button size="middle">middle button</jsj-button>
<jsj-button size="small">small button</jsj-button>

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description     | Type                                                                                                                                  | Default     |
| ------------ | ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `block`      | `block`       | 将按钮宽度调整为其父宽度的选项 | `boolean`                                                                                                                             | `false`     |
| `disabled`   | `disabled`    | 按钮失效状态          | `boolean`                                                                                                                             | `false`     |
| `isActive`   | `is-active`   | Active state    | `boolean`                                                                                                                             | `false`     |
| `isFocused`  | `is-focused`  | Focused state   | `boolean`                                                                                                                             | `false`     |
| `isHovered`  | `is-hovered`  | Hovered state   | `boolean`                                                                                                                             | `false`     |
| `isInverted` | `is-inverted` | Is inverted     | `boolean`                                                                                                                             | `false`     |
| `isLight`    | `is-light`    | Is light        | `boolean`                                                                                                                             | `false`     |
| `isLoading`  | `is-loading`  | Loading state   | `boolean`                                                                                                                             | `false`     |
| `isOutlined` | `is-outlined` | Is outlined     | `boolean`                                                                                                                             | `false`     |
| `isRounded`  | `is-rounded`  | Rounded button  | `boolean`                                                                                                                             | `false`     |
| `isStatic`   | `is-static`   | Static          | `boolean`                                                                                                                             | `false`     |
| `shape`      | `shape`       | 设置按钮形状          | `"circle" \| "round"`                                                                                                                 | `undefined` |
| `size`       | `size`        | 设置按钮大小          | `"large" \| "middle" \| "small"`                                                                                                      | `undefined` |
| `type`       | `type`        | 设置按钮类型          | `"black" \| "danger" \| "dark" \| "ghost" \| "info" \| "light" \| "link" \| "primary" \| "success" \| "text" \| "warning" \| "white"` | `undefined` |


----------------------------------------------

@jsj/core，一个强大的组件库
