import Vue from 'vue'
import Router from 'vue-router'
import Login  from "../components/Login.vue";
import Home from "../components/Home.vue"

Vue.use(Router)

const router=new Router({
  routes: [
    {path:'/', redirect:'/login'},
    {path:'/login',component: Login},
    {path:'/home',component: Home},
  ]
})
//to表示将要访问的路径，from表示从哪个路径跳转过来 next表示放行，next('/login')表示强制跳转的路径
router.beforeEach((to,from,next)=>{
  if(to.path === '/login') return next();
  //获取token
  const  tokenStr=window.sessionStorage.getItem("token");
  if(!tokenStr) return next('/login')
  next()
})
export  default  router
