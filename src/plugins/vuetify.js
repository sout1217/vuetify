import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

// https://vuetifyjs.com/en/features/presets/ 참고
// 기본값을 정하면 vuetify 가 알아서 색을 밝게랑 어둡게 지정해준다
const option = {}
console.log(option)

export default new Vuetify(option)
