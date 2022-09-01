import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mock from './api/mock'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant);

Vue.config.productionTip = false
// router.beforeEach((to,from,next)=>{
//   store.commit('getModelAry')
//   const ary = store.state.modelData.modelAry;
//   // 这里权限的逻辑就是不等于token 并且 值为login
//   if(!ary && to.name==='model'){
//     next({name:'home'})
//   }else{
//     next()
//   }
// })
new Vue({
  router,
  store,
  mock,
  render: h => h(App)
}).$mount('#app')
