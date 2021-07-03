<template>
    <Fragment>
        <span>{{ num }}</span>
        <br />
        <button @click="add">+1</button>
        <button @click="subtract">-1</button>
        <br />
        <span>{{state.count}}</span>
        <br />
        <span>state.num：{{state.count}}-num.value{{state.num}}</span>
        <br />
        <button @click="changeCount">改变state.count</button>
        <button @click="changeNum">改变state.num</button>
        <br />  
        <p>toRefs：</p>
        <!-- <span>num：{{ num }}-count：{{count}}</span> -->
        <br />
        <span>getNumComputed: {{getNumComputed}}</span>  
        <br />
    </Fragment>
</template>

<script setup="props">
  import {ref, reactive, toRefs, computed, watch, warn, watchEffect} from 'vue'
  const num = ref(1) // num.value -> 1; 数字、字符串等简单数据类型响应, 响应式包装对象
  const car = ref(2)
  const state = reactive({  // 返回对象的响应式副本
    count: 2,
    num,
  })
  const add = ()=> num.value++;
  const subtract = ()=> num.value--;
  const changeCount = ()=> state.count++;
  const changeNum = ()=> state.num++; // reactive 将解包所有深层的 refs，同时维持 ref 的响应性。
  const getNumComputed = computed(() => num.value + 10)

  // 观察一个getter
  watch(
    () => state.count,
    (count, preCount) => {
      debugger
    }
  )
  // 观察一个ref
  watch(num, (num, prevNum) => {
    debugger
  })

  watchEffect(()=> console.log(`value:${num.value}`))

</script>

<!--
<script>
import { ref, reactive, toRefs } from 'vue'

export default {
  setup(props) {
    // debugger;
    let num = ref(1)
    const state = reactive({  // 返回对象的响应式副本
      count: 2,
      num,
    })
    const add = ()=> num.value++;
    const subtract = ()=> num.value--;
    const changeCount = ()=> state.count++;
    const changeNum = ()=> state.num++; // reactive 将解包所有深层的 refs，同时维持 ref 的响应性。

    return {
      num,
      add,
      state,
      ...toRefs(state),
      subtract,
      changeCount,
      changeNum
    }
  },
}
</script>
-->