- 配合antd Tab 组件  使用的hooks
- 将当前活动的tab key值存在url query中(?tab=x)
- 页面切换时，使用history.goBack()方法回到当前页或者刷新页面，状态不丢失
  

**返回值：{activeKey, onChange} activeKey:表示选中的tab值  onChange:表示切换tab的方法**

```jsx
import React from 'react'
import { Tabs } from 'antd'
import { useTab } from '@jsj/react'
import Tab1 from '***'
import Tab2 from '***'

const { TabPane } = Tabs

export default () => {
  const tabs = [
    { tab: 'tab1', key: 'tab1', component: <Tab1> },
    { tab: 'tab2', key: 'tab2', component: <Tab2> },
  ]
  
  return (<div>
    <Tabs {...useTab('tab1')}>
      {
        tabs.map((el) => <TabPane tab={el.tab} key={el.key}>
          {el.component}
        </TabPane>)
      }
    </Tabs>
  </div>)
}
```