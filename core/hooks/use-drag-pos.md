````js static
import { useDragPos } from '@jsj/react'
export default () => {
    const [previewRef, pos, handler] = useDragPos({
        initPos: { left: 0, top: 0 },
        onDragEnd: (pos) => { console.log(pos) },
        dragRange: [{left: 0}, { left: window.innerWidth }]
    })

    return (<div ref={previewRef} {...handler} style={{ left: pos.left }}>
        拖拽区域
    </div>)
}
````