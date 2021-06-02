api调用辅助hooks

**类型说明**

````ts
interface IRowSelection {
  type?: RowSelectionType  // 'checkbox' | 'radio'
  onChange: (value: any) => void
  selectedRowKeys: any[]
}

interface IRowSelectionProps {
  reset: () => void  // 修改rowSelection方法
  rowSelectionProps: IRowSelection // 表格使用的rowSelection
  selectedRowKeys: string[]
  listAction: ListActions<string>
}
````

**使用示例**

```tsx
import React from 'react'
import { useRowSelection } from '@jsj/react'
import { Table } from 'antd'

export default () => {
    const { reset, listAction, selectedRowKeys, rowSelectionProps } = useRowSelection('checkbox')

    return (<div>
        <Table rowKey="id" rowSelection={rowSelectionProps} />
    </div>)
}
```