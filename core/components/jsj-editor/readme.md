# jsj-editor
通用编辑器

```tsx
// react写法  入参为property驼峰命名，  vue或者html的入参对应attribute
import { JsjEditor } from '@jsj/react'
```


```html
<jsj-editor id="quill-editor" format="json" content=""></jsj-editor>
```

<jsj-editor id="quill-editor" format="json" content=""></jsj-editor>

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description | Type                         | Default                  |
| ----------------------- | ------------------------- | ----------- | ---------------------------- | ------------------------ |
| `bounds`                | `bounds`                  |             | `HTMLElement \| string`      | `undefined`              |
| `content`               | `content`                 |             | `string`                     | `undefined`              |
| `customToolbarPosition` | `custom-toolbar-position` |             | `"bottom" \| "top"`          | `'top'`                  |
| `debug`                 | `debug`                   |             | `string`                     | `'warn'`                 |
| `format`                | `format`                  |             | `"html" \| "json" \| "text"` | `'html'`                 |
| `formats`               | --                        |             | `string[]`                   | `undefined`              |
| `issalj`                | `issalj`                  |             | `boolean`                    | `false`                  |
| `modules`               | `modules`                 |             | `string`                     | `undefined`              |
| `placeholder`           | `placeholder`             |             | `string`                     | `'Insert text here ...'` |
| `preserveWhitespace`    | `preserve-whitespace`     |             | `boolean`                    | `false`                  |
| `readOnly`              | `read-only`               |             | `boolean`                    | `undefined`              |
| `scrollingContainer`    | `scrolling-container`     |             | `HTMLElement \| string`      | `undefined`              |
| `strict`                | `strict`                  |             | `boolean`                    | `true`                   |
| `styles`                | `styles`                  |             | `string`                     | `'{}'`                   |
| `theme`                 | `theme`                   |             | `string`                     | `'snow'`                 |


## Events

| Event                   | Description | Type                                                                                                                                                                                                                                 |
| ----------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `editorBlur`            |             | `CustomEvent<{ editor: any; source: string; }>`                                                                                                                                                                                      |
| `editorChange`          |             | `CustomEvent<{ editor: any; event: "selection-change"; range: any; oldRange: any; source: string; } \| { editor: any; event: "text-change"; content: any; text: string; html: string; delta: any; oldDelta: any; source: string; }>` |
| `editorContentChange`   |             | `CustomEvent<{ editor: any; content: any; text: string; html: string; delta: any; oldDelta: any; source: string; }>`                                                                                                                 |
| `editorFocus`           |             | `CustomEvent<{ editor: any; source: string; }>`                                                                                                                                                                                      |
| `editorInit`            |             | `CustomEvent<any>`                                                                                                                                                                                                                   |
| `editorSelectionChange` |             | `CustomEvent<{ editor: any; range: any; oldRange: any; source: string; }>`                                                                                                                                                           |


----------------------------------------------

@jsj/core，一个强大的组件库
