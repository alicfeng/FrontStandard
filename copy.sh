# if [ -d "jsj-antr/" ];then
#   rm -rf jsj-antr
# else
#   echo "jsj-antr文件夹不存在"
# fi

# if [ -d "jsj-antv/" ];then
#   rm -rf jsj-antv
# else
#   echo "jsj-antv文件夹不存在"
# fi

if [ -d "core/" ];then
  rm -rf core
else
  echo "core文件夹不存在"
fi

cd ..
cd npm-packages

# cd jsj-antr
# npm run build:doc
# scp -r styleguide ../../FrontStandard/jsj-antr
# cd ..

# cd jsj-antv
# npm run build:doc
# scp -r dist ../../FrontStandard/jsj-antv
# cd ..

cd core
scp -r www ../../FrontStandard/core


cd ..
cd ..
cd FrontStandard

sed -i 's/\/build/\/core\/build/g' core/index.html
