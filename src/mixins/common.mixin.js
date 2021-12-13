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
