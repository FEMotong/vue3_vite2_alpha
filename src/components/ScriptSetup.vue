<template>
    <div>
        <span>{{ num }}</span>
        <br />
        <button @click="add">+1</button>
        <button @click="subtract">-1</button>
    </div>
</template>


<script setup>
  import {ref} from 'vue'
  const num = ref(1)
  const add = ()=> num.value++;
  const subtract = ()=> num.value--;
</script>


<!--
<script>
import { ref } from 'vue'

export default {
  setup() {
    let num = ref(1)
    const add = ()=> num.value++;
    const subtract = ()=> num.value--;

    return {
      num,
      add
    }
  },
}
</script>
-->