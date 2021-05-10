if [ -d "jsj-antr/" ];then
  rm -rf jsj-antr
else
  echo "jsj-antr文件夹不存在"
fi

if [ -d "jsj-antv/" ];then
  rm -rf jsj-antv
else
  echo "jsj-antv文件夹不存在"
fi

if [ -d "jsj-common/" ];then
  rm -rf jsj-common
else
  echo "jsj-common文件夹不存在"
fi

if [ -d "jsj-ele/" ];then
  rm -rf jsj-ele
else
  echo "jsj-ele文件夹不存在"
fi

if [ -d "jsj-react/" ];then
  rm -rf jsj-react
else
  echo "jsj-react文件夹不存在"
fi

if [ -d "jsj-vue/" ];then
  rm -rf jsj-vue
else
  echo "jsj-vue文件夹不存在"
fi

cd ..
cd npm-packages

cd jsj-antr
npm run build:doc
scp -r styleguide ../../FrontStandard/jsj-antr

cd ..
cd jsj-vue
npm run build:doc
scp -r dist ../../FrontStandard/jsj-vue

cd ..
cd jsj-antv
npm run build:doc
scp -r dist ../../FrontStandard/jsj-antv

cd ..
cd jsj-common
npm run build:doc
scp -r styleguide ../../FrontStandard/jsj-common

cd ..
cd jsj-react
npm run build:doc
scp -r styleguide ../../FrontStandard/jsj-react

cd ..
cd jsj-ele
npm run build:doc
scp -r dist ../../FrontStandard/jsj-ele

