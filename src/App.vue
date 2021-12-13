<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Reset from '@/assets/css/reset.css'
import Default from '@/assets/css/default.css'
import Header from '@/components/header'
import setting from '@/setting'

export default {
  name: 'App',
  components: {
    mapGetters,
    Reset,
    Default,
    Header
  },
  data () {
    return {
      setting
    }
  },
  computed: {
    ...mapGetters(['hogeData'])
  },
  methods: {
    handleResize () {
      // console.log('window.innerWidth:', window.innerWidth)
      // Don't work prerender
      if (!(window.__PRERENDER_INJECTED && window.__PRERENDER_INJECTED.isPrerendering)) {
        if (window.innerWidth <= 767) {
          this.$store.dispatch('setMediaType', {
            type: 'sp'
          })
        } else {
          this.$store.dispatch('setMediaType', {
            type: 'pc'
          })
          if (this.isNavigation) {
            this.$store.dispatch('changeIsNavigation')
          }
        }
      }
    },
    getType () {
      this.$store.dispatch('apiPlans/apiGetType', {
        lang: this.lang.params
      }).then(res => {
        console.log('getType res', res)
        // for (let i = 0; i < res.data.data.length; i++) {
        //   console.log('getType', res.data.data[i])
        //   this.getPlan(res.data.data[i])
        // }
      }, err => {
        console.log('getType err res', err)
      })
    }
  },
  created () {
  },
  mounted () {
    // this.handleResize()
    // window.addEventListener('resize', this.handleResize)
    if (process.env.CLIENT_ENV !== 'production') {
      const head = document.getElementsByTagName('head')[0]
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'robots')
      meta.setAttribute('content', 'noindex')
      head.appendChild(meta)
    }
  },
  beforeDestroy () {
    // window.removeEventListener('resize', this.handleResize)
  },
  watch: {
  }
}
</script>

<style lang="postcss" scoped>
  @import './assets/css/mixins.css';
  @import './assets/css/variables.css';
</style>
