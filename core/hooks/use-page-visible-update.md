## usePageVisibleUpdate使用实例
## 页面切换或者显示隐藏触发

````js static
import React from 'react'
import { usePageVisibleUpdate } from '@jsj/react'

export default () => {
  useEffect(() => {
    usePageVisibleUpdate((isVisible) => {
        console.log(isVisible)
    })
  }, [])
  return (<div>test usePageVisibleUpdate</div>)
}
````