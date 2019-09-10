import Vue from 'vue'
import Router from 'vue-router'
//导入router里的各个模块
import home from "./home"
import sort from "./sort"
import eat from "./eat"
import car from "./car"
import mine from "./mine"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    home,sort,eat,car,mine,
    {path:"/not-found",component:()=>import("@/views/NotFound")},
    {path:"*",redirect:"/not-found"}

  ]
})


