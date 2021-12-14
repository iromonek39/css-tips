<template>
  <nav class="header__nav">
    <div class="header__inner">
      <div class="header__left">
        <h1>
          <img
            src="../assets/img/logo.png"
            alt="ロゴ"
            class="logo">
          <span class="header__title">タイトル</span>
        </h1>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import setting from '@/setting.js'

export default {
  name: '',
  components: {
    setting,
    mapGetters
  },
  computed: {
    ...mapGetters([])
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
.header {
  &__nav {
    position: fixed;
    width: 100%;
    height: 80px;
    background: #fff;
    z-index: 10;

    @media screen and (max-width: 767px) {
      height: 60px;
    }
  }

  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  &__left {
    position: absolute;
    padding-left: 50px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    @media screen and (max-width: 767px) {
      padding-left: 10px;
    }

    & h1 {
      display: table;
      position: relative;

      & .logo {
        width: 100px;
        height: auto;

        @media screen and (max-width: 767px) {
          width: 77px;
        }
      }
    }
  }

  &__title {
    display: table-cell;
    padding-left: 30px;
    color: #333;
    font-size: 2.6rem;
    vertical-align: middle;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &__right {
    display: flex;
    position: absolute;
    padding-right: 50px;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);

    @media screen and (max-width: 767px) {
      right: 60px;
      padding-right: 15px;
    }
  }
}
</style>
