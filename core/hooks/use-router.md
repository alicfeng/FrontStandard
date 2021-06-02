#### useUrlQuery使用实例

将地址栏的参数转化为对象

````js static
import React from 'react'
import { useUrlQuery } from '@jsj/react'

export default () => {
  const dataObject = useUrlQuery()
  return (<div>
    测试useUrlQuery
  </div>)
}
````


#### useSetQuery使用

介绍： 在地址栏拼接新的参数，然后跳转页面
````js static
import React from 'react'
import { useSetQuery } from '@jsj/react'

export default () => {
  const newRouterFn = useSetQuery()
  return (<div>
    <button onClick={() => newRouterFn({ id: '1024', name: 'useSetQuery' })}>跳转</button>
  </div>)
}
````


#### useRouter 使用实例


返回值
params  返回Url参数的键/值对的对象
query   返回URL参数的键/值对的对象
setQuery 在URL拼接新的参数，然后跳转页面
replace 指定url跳转，没有任何跳转记录
goBack  加载历史列表中的上一个url
goForward  加载历史列表中的下一个url
navWithQuery 指定url跳转，有路由跳转记录

````js static
import React from 'react'
import { useRouter } from '@jsj/react'

export default () => {
  const routerObj = useRouter()
  
  return (<div>
    useRouter包含url处理方法
  </div>)
}
````