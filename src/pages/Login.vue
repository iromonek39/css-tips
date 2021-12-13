<template>
  <article class="home">
    <p>home</p>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import setting from '@/setting.js'

export default {
  name: 'Home',
  components: {
    setting,
    mapGetters
  },
  computed: {
    ...mapGetters(['hogeData'])
  },
  data () {
    return {
      setting
    }
  },
  methods: {
  },
  mounted () {
  },
  created () {
  },
  beforeUpdate () {
  },
  updated () {
  },
  activated () {
  }
}
</script>
<style lang="postcss" scoped>
  @import '../assets/css/mixins.css';
  @import '../assets/css/variables.css';

  .home {
    margin: auto;
    overflow: hidden;
    padding-top: 80px;
  }
</style>
