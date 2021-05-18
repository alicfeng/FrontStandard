# input-suffix

input标签后字数显示组件

## 使用方式

由于input-suffix内置样式为绝对定位，需要结合外面容器position:relative; 一起使用

*  react项目使用
``` jsx
/*react*/
<style>
  .input-suffix-container {
    position: relative;
    input-suffix {
      top: 10px;
    }
  }
</style>
<script>
  export default class InputSuffix extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        inputValue: ''
      }
    }
    render() {
      return (
        <div className="input-suffix-container">
          <input onChange={e => this.setState({ inputValue: e.target.value })}/>
          <input-suffix className="input-suffix" value={this.state.inputValue} maxLength="10" />
        </div>
      )
    }
  }
  </script>
```

* vue项目引用

``` vue
<div style="position: relative; ">
  <input v-model="inputValue"/>
  <input-suffix maxlength="20" :value="inputValue" />
</div>
<script>
export default {
    data() {
      return {
        inputValue: 'sdfg',
      }
    }  
  }
</script>
```

<div id="vue-example" style="position: relative; ">
  <input v-model="inputValue"/>
  <input-suffix maxlength="20" :value="inputValue" />
</div>

<script>
  new Vue({
    el: '#vue-example',
    data() {
      return {
        inputValue: 'sdfg',
      }
    }  

  }); 
</script>

* 纯html使用

``` html
<!-- 引入 -->
<script type="module">
    import '../components/input-suffix/index.js'
</script>
<!-- 使用 -->
<div style="position: relative;">
    <input />
    <input-suffix value="input或者textArea等实时变化的值" maxlength="10" />
</div>
```

<div style="position: relative; ">
  <input />
  <input-suffix maxlength="10" />
</div>
