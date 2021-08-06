import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

// 아래와 같은 옵션을 통하여 모바일 기준을 변경할 수 있다
const option = {
  breakpoint: {
    mobileBreakpoint: 'xs',
  },
}
console.log(option)

export default new Vuetify({})
