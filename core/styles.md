## 文件引入
````js static
import '@jsj/core/dist/index.css'
````

## margin/padding篇
字母解释： m代表margin，p在第一个代表padding，p在最后一个代表percent，auto即字面意思

margin和padding的最大像素值为200，像素递增step为1，百分比最大值到100，百分比递增step为1

共分7个方向
- `上`:&ensp;&ensp;  m-t-5&ensp;&ensp; =margin-top: 5px; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; p-t-10-p  =padding-top: 10%;
- `下`:&ensp;&ensp;  p-b-200    =padding-bottom: 200px; &ensp; m-b-5-p   =margin-bottom: 5%;
- `左`:&ensp;&ensp;  m-l-25 &ensp;=margin-left: 25px;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;p-l-30-p  =padding-left: 30%;
- `右`:&ensp;&ensp;  p-r-100     =padding-right: 100px; &ensp;&ensp;&ensp;m-r-45 =margin-right:45%;
- `全`:&ensp;&ensp;  m-20&ensp;&ensp;&ensp;=margin: 20px;   &ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;p-30  = padding: 30px;  &ensp;&ensp;全方向无百分比模式
- `竖直`: m-v-126  =margin: 126px 0;  &ensp;&ensp;  &ensp;&ensp;&ensp;&ensp;p-v-20-auto = padding: 20px auto; &ensp;&ensp;m-v-40-p-auto = margin: 40% auto;
- `水平`: p-h-180  =padding: 0 180px; &ensp;&ensp;&ensp;&ensp;&ensp;  m-h-120-auto = margin: auto 120px;&ensp;&ensp;p-h-22-p-auto = padding: auto 22%;


## height/min-height/max-height/width/min-width/max-width篇
height和width的最大像素值为1200，像素递增step为10，最大百分比为100，百分比递增step为1

min和max开头的没有百分比单位

### height相关：
height-100  = height: 100px;&ensp;&ensp;height-20-p = height: 20%;&ensp;&ensp;min-height-200 = min-height: 200px; &ensp;&ensp;max-height-220 = max-height: 220px

### width相关：
width-100  = width: 100px;&ensp;&ensp;&ensp;&ensp;width-20-p = width: 20%;&ensp;&ensp;&ensp;min-width-200 = min-width: 200px; &ensp;&ensp;&ensp;&ensp;max-width-220 = max-width: 220px

## font-size/line-height篇
最大像素值为100，像素递增step为1

font-16   = font-size:16px;

line-height-28  = line-height: 28px;

## text-align篇
text-left  = text-align: left   &ensp;&ensp;text-center = text-align: center  &ensp;&ensp;text-right = text-align: right

## display篇
d-f = display:flex&ensp;&ensp;

jc-c = justify-content: center&ensp;&ensp;jc-sb = justify-content: space-between;&ensp;&ensp;jc-s:justify-content: start;

ai-c = align-items: center