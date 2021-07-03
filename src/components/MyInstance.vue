<template>
    <div>
        <span>{{ num }}</span>
        <br />
        <button @click="add">+1</button>
        <button @click="subtract">-1</button>
        <br />
        <span>{{state.count}}</span>
        <br />
        <button @click="changeCount">改变count</button>
    </div>
</template>


<script setup="props">
  import {ref, reactive} from 'vue'
  const num = ref(1) // 数字、字符串等简单数据类型响应
  const state = reactive({  // 返回对象的响应式副本
    count: 2
  })
  const add = ()=> num.value++;
  const subtract = ()=> num.value--;
  const changeCount = ()=> state.count++;

</script>



<!--
<script>
import { ref } from 'vue'

export default {
  setup(props) {
    // debugger;
    let num = ref(1)
    const add = ()=> num.value++;
    const subtract = ()=> num.value--;

    return {
      num,
      add,
      subtract
    }
  },
}
</script>
-->