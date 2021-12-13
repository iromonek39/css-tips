<template>
  <div class="main">
    <div class="home">
      <Btn/>
      <CardList/>

      <div v-html="userInputData"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import setting from '@/setting.js'
import Btn from '@/components/Btn'
import CardList from '@/components/CardList'

export default {
  name: 'Home',
  components: {
    setting,
    mapGetters,
    Btn,
    CardList
  },
  computed: {
    ...mapGetters(['hogeData'])
  },
  data () {
    return {
      setting,
      userInputData: '<img src="/static/logo.png" onerror=alert(1)>'
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
    padding-top: 80px;
    max-width: 920px;
    margin: 0 auto;
  }
</style>
