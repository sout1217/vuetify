import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

// https://vuetifyjs.com/en/features/presets/ 참고
// 기본값을 정하면 vuetify 가 알아서 색을 밝게랑 어둡게 지정해준다
const option = {
  theme: {
    themes: {
      light: {
        primary: '#ff05fa',
        secondary: colors.indigo, // vuetify 에서 지정한 색을 가져와 사용도 가능하다
      },
    },
  },
}
console.log(option)

export default new Vuetify(option)
