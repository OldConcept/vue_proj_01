import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
// Message的配置需要使用全局挂载，把组件挂载到Vue原型对象上，这样每一个组件都可以通过this.$message来使用Message功能
Vue.prototype.$message = Message
