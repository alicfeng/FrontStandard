```tsx
import { useClientRef } from '@jsj/react'
export default () => {
    const [rect, ref] = useClientRef()

    return (<div>
        <h1 ref={ref}>hello, world</h1>
        {
            rect !== null &&
            <h2>
                the above header is {Math.round(rect.height)}px tall
            </h2>
        }
    </div>)
}
```