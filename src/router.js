import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import MyInstance from './components/MyInstance.vue'

const routes = [
    {
        path: '/MyInstance',
        component: MyInstance
    },
    {
        path: '/',
        component: HelloWorld
    }
]

const VueRouter = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
})

export default VueRouter