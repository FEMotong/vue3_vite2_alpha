<template>
    MyChild2 component
    <br />
    <span>{{ bookTemp }}</span>
    <br />
    <span>myTitle: {{myTitle}}</span>
</template>

<script setup>
import { inject } from 'vue'

const bookTemp = inject('book')
const myTitle = inject('myTitle')

</script>