api调用辅助hooks

-------

**类型说明**

````ts
interface UseFetchOptions {
  getDataOnMount?: boolean    // 是否首次拉取数据
  // 轮询拉取数据时间间隔
  popllIntervalTime?: number | undefined | null
  allowParallel?: boolean   // 是否允许并行调用
  requestErrCallback?: Function   // 请求发生错误时回调
}

interface InitState<DataType> {
  params?: any
  initData: DataType
  initLoading?: boolean
}

function useFetch(
  getData: (...arg: any[]) => Promise<any>,
  init: InitState<T>,
  options: UseFetchOptions,
): [
  data, 
  getDataFn: Function  // 主动触发拉取数据
]

````

----
**使用示例**

````js static
import React from 'react'
import { useFetch } from '@jsj/react'
import axios from 'axios'


const getData = (data) => axios({
  url: 'xxx',
  method: 'post',
  data
})
export default () => {

  const [data, fetchData] = useFetch(
    getData,
    {
      initData: {},  // 定义初始化的数据默认值
      params: {}   // 调接口需要传的参数
    },
    {
      getDataOnmount: true,   // 是否首次拉取数据
      pollIntervalTime: 1000 // 轮询拉去数据时间间隔，不设置则不轮询
    }
  )
  return (<div>
    <div>{data.loading}</div>
    <div>{data.value}</div>
    <button onClick={() => fetchData({ id: 'xxx' })}>主动触发dataFn</button>
  </div>)
}
````