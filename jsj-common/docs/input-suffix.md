# input-suffix

input标签后字数显示组件

## 使用方式

由于input-suffix内置样式为绝对定位，需要结合外面容器position:relative; 一起使用

*  react项目使用 `(请点开expand查看代码)`

``` jsx
/*react*/
<style>
  .input-suffix-container {
    position: relative;
    .input-suffix {
      top: 10px;
    }
  }
</style>
<script>
  export default class InputSuffix extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        inputValue: 'react初始输入值'
      }
    }
    render() {
      return (
        <div className="input-suffix-container width-400">
          <input className="width-100-p" onChange={e => this.setState({ inputValue: e.target.value })}/>
          <input-suffix className="input-suffix" value={this.state.inputValue} maxLength="30" />
        </div>
      )
    }
  }
  </script>
```

* vue项目使用

``` vue
<div style="position: relative; ">
  <input v-model="inputValue"/>
  <input-suffix maxlength="20" :value="inputValue" />
</div>
<script>
export default {
    data() {
      return {
        inputValue: 'vue初始输入值',
      }
    }  
  }
</script>
```

<div id="vue-example" style="position: relative; " class="width-400">
  <input v-model="inputValue" class="width-100-p"/>
  <input-suffix maxlength="20" :value="inputValue" />
</div>

<script>
  new Vue({
    el: '#vue-example', 
    data() {
      return {
        inputValue: 'vue初始输入值',
      }
    }  

  }); 
</script>

* 纯html使用

``` html
<div style="position: relative;">
    <input />
    <input-suffix value="input或者textArea等实时变化的值" maxlength="10" />
</div>
```

<div style="position: relative; ">
  <input />
  <input-suffix maxlength="10"/>
</div>
