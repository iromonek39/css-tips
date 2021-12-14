<template>
  <nav class="header__nav">
    <div class="header__inner">
      <div class="header__left">
        <h1>
          <img
            src="../assets/img/logo.png"
            alt="ロゴ"
            class="logo">
          <span class="clinic-name">タイトル</span>
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
@import '../assets/css/mixins.css';
@import '../assets/css/variables.css';

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

      & .clinic-name {
        display: table-cell;
        padding-left: 30px;
        color: #fff;
        font-size: 2.6rem;
        vertical-align: middle;

        @media screen and (max-width: 767px) {
          display: none;
        }
      }
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

  &__address {
    color: #fff;
    text-align: right;

    & dt {
      max-width: 230px;
      padding-left: 50px;
      padding-bottom: 6px;
      margin-left: auto;
      background-image: url('../assets/img/icon/icon-tel.png');
      background-size: 36px 36px;
      background-repeat: no-repeat;
      font-size: 26px;
      font-weight: bold;
      line-height: 1;

      @media screen and (max-width: 767px) {
        font-size: 16px;
        background-size: 14px 14px;
        padding-left: 13px;
      }
    }

    & dd {
      font-size: 12px;
      line-height: 1;

      @media screen and (max-width: 767px) {
        font-size: 10px;
      }
    }
  }
}
</style>
