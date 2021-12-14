<template>
  <div class="main">
    <div class="home">
      <h2 class="section-title">ボタン</h2>
      <div class="btn-wrapper">
        <Btn
          :color="'white'"
          :label="'あります'"/>
        <Btn
          :color="'blue'"
          :label="'あります'"/>
      </div>
      <h2 class="section-title">カード</h2>
      <CardList/>
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
    padding-top: 80px;
    padding-bottom: 20px;
    max-width: 920px;
    margin: 0 auto;

    @media screen and (max-width: 767px) {
      padding-top: 10px;
    }
  }

  .section-title {
    position: relative;
    display: flex;
    padding-bottom: 8px;
    margin-bottom: 24px;
    font-size: 32px;
    justify-content: center;

    @media screen and (max-width: 767px) {
      font-size: 18px;
    }

    &:before {
      position: absolute;
      width: 80px;
      bottom: 0;
      content: '';
      border-bottom: 2px solid #333;

      @media screen and (max-width: 767px) {
        width: 40px;
      }
    }
  }

  .btn-wrapper {
    text-align: center;
  }
</style>
