useRefValue 将传入值转换程引用对象，并在每次组件render时同步修改ref.current

tips: 解决函数式组件由于每次render生成新变量所导致的快照值问题

**类型说明**

````ts
function useRefValue(
    value: any   // 基本类型或引用类型
): RefObject // ref结构对象
````

**useRefValue使用示例**

````js static
import React, { useState } from 'react'
import { useRefValue } from '@jsj/react'

export default () => {
    const [count, setCount] = useState(0)
    const countRef = useRefValue(count)
    return (<div>
        {countRef.current}
        <button onClick={() => setCount(c + 1)}>每次加1</button>

        <button onClick={() => {
            console.log(count, '可能时点击前5秒的树值')
            console.log(countRef.current, '数值一定时当前页面最新的值')
        }}>
            延迟显示计数值
        </button>
    </div>)
}
````

**使用useCallback解决快照值问题**

````js static
import React, { useState } from 'react'
import { useMount } from 'react-use'
import { useCallbackRef } from '@jsj/react'

export default () => {
    const [count, setCount] = useState(0)
    const showCount = () => {
        console.log(count)
    }
    const updatedShowCount = useCallbackRef(showCount)

    useMount(() => {
        window.addEventListener('message', showCount)
    })
    useMount(() => {
        window.addEventListener('message', updatedShowCount)
        // 响应事件时，打印结果应该是最新的值
    })
    return (<div>
        {countRef.current}
        <button onClick={() => setCount(c+1)}>每次加1</button>
    </div>)
}
````