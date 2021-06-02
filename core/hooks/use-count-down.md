倒计时hooks

````ts
interface IControllerOption {
    start: () => void // 开始倒计时
    stop: () => void  // 暂停倒计时
    reset: (a: number, b?: number) => void // 重置倒计时  a、重置计时时间， 重置计时间隔
}
````
**使用示例**
````js static
import React from 'react'
import { useCountDown } from '@jsj/react'

export default () => {
    const [countTime, { start, stop, reset }] = useCountDown(10)
    return (<div>
        <div>{countTime}</div>
        <div onClick={start}>开始</div>
        <div onClick={stop}>暂停</div>
        <div onClick={() => reset(12, 1000)}>重置</div>
    </div>)
}

````