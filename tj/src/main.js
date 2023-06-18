import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

var app = createApp(App).use(store).use(router).use(ElementPlus)
// 通过遍历的方式注册所有 svg组件，会牺牲一点点性能
for (let i in Icons) {
    app.component(i, Icons[i])
  }
  app.mount('#app')
