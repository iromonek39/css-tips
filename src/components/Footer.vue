<template>
  <footer>
    <div class="footer__wrapper">
      <div class="footer__inner">
        <div class="footer__logo">
          <img
            src="@/assets/img/logo.png"
            alt="ロゴ"
            class="logo">
        </div>
        <nav class="footer__nav">
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              トップ
            </li>
            <li class="footer__nav-item">
              その他
            </li>
          </ul>
          <ul class="footer__sns">
            <li class="footer__sns-item twitter">
              <img
                src="@/assets/img/icon/twitter.svg"
                alt="twitter">
            </li>
            <li class="footer__sns-item instagram">
              <img
                src="@/assets/img/icon/instagram.png"
                alt="twitter">
            </li>
          </ul>
        </nav>
        <div
          class="footer__page-top"
          @click="scrollTop()">
          <img
            src="@/assets/img/icon/arrow-up.svg"
            alt="pageTop">
        </div>
      </div>
    </div>
  </footer>
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
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
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
.footer {
  &__wrapper {
    max-width: 1280px;
    padding: 40px 20px;
    margin: 0 auto;
  }

  &__inner {
    display: grid;
    gap: 40px;
    grid-template-areas: 'logo nav pageTop';
    grid-template-columns: 110px auto 60px;

    @media screen and (max-width: 767px) {
      grid-template-areas:
       'logo sns'
       'nav pageTop';
      grid-template-columns: auto 120px;
    }
  }

  &__logo {
    width: 110px;
    height: 60px;
    grid-area: logo;

    & img {
      width: 100%;
      height: auto;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 60px;
    grid-area: nav;
    justify-self: end;

    @media screen and (max-width: 767px) {
      display: contents;
    }

    &-list {
      display: flex !important;
      gap: 20px !important;
      font-weight: bold;

      @media screen and (max-width: 767px) {
        flex-direction: column;
      }
    }
  }

  &__sns {
    display: flex;

    @media screen and (max-width: 767px) {
      grid-area: sns;
      justify-self: end;
    }

    &-item {
      display: block;
      padding: 10px;
      background-repeat: no-repeat;
      background-size: 22px;

      & img {
        width: 35px;
        height: 35px;
      }
    }
  }

  &__page-top {
    position: relative;
    width: 60px;
    height: 60px;
    border: 1px solid #000;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    grid-area: pageTop;
    align-self: end;
    justify-self: end;

    & img {
      position: absolute;
      width: 40px;
      height: 40px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
