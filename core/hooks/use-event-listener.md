#### 事件监听钩子，组件实例销毁，自动移除事件，避免内存泄露

**类型说明**
````ts
function useListener = (
  eventType: string,  // 事件类型
  eventHandler: ReactEventHandler,  // 事件触发时的回调
  node?: HTMLElement | Window,  // dom节点或window对象
): void
````

````js static
import React, { useRef, useEffect } from 'react'
import { useListenIframeMsg, useListener } from '@jsj/react'
export default () => {
  const ref = useRef(null)
  useListenIframeMsg((e) => {
    console.log(e)
  })

  useListener('touchend', (e) => {
    console.log(e)
  }, ref.current)

  return (<div ref={ref}>
    触摸元素节点
    <iframe src={src的值}>
      
    </iframe>
  </div>)
}
````