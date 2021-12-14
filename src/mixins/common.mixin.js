import { mapState, mapActions } from 'vuex'
import setting from '../setting.js'

export default {
  computed: {
    ...mapState([])
  },
  data () {
    return {
      setting
    }
  },
  methods: {
    ...mapActions([]),
    getUserAgent () {
      // TODO: PC・SP判定一時的に作りました
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return 'SP'
      } else {
        return 'PC'
      }
    },
    linkTo (path) {
      switch (path) {
        case 'login':
          this.$router.push('/login')
          break
        case 'register':
          this.$router.push('/register')
          break
        case 'schedule':
          this.$router.push('/schedule')
          break
        default:
          break
      }
    }
  }
}
