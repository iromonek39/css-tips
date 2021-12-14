<template>
  <button
    :class="isActiveMenu ? 'header__toggle--close' : ''"
    class="header__toggle">
    <div class="header__toggle-inner">
      <span class="bar bar--top"/>
      <span class="bar bar--middle"/>
      <span class="bar bar--bottom"/>
    </div>
  </button>
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
  props: {
    isActiveMenu: {
      type: Boolean,
      default: false
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
  @import '../assets/css/variables.css';
  .header {
    &__toggle {
      position: fixed;
      display: block;
      width: 80px;
      height: 80px;
      padding: 0;
      top: 0;
      right: 10px;
      cursor: pointer;
      z-index: 999;

      @media screen and (max-width: 767px) {
        width: 60px;
        height: 60px;
        margin-top: 8px;
        background: #eedcb3;
        border-radius: 50%;
      }

      &-inner {
        position: relative;
        top: -7px;

        &:after {
          position: absolute;
          content: 'MENU';
          color: #333;
          transform: translate(-50%, 15px);

          @media screen and (max-width: 767px) {
            font-size: 10px;
          }
        }

        & .bar {
          position: absolute;
          width: 40px;
          height: 2px;
          background: #333;
          transform: translateX(-50%);
          transition: .3s cubic-bezier(0, .45, .47, 1);

          @media screen and (max-width: 767px) {
            width: 25px;
          }

          &--top {
            top: -11px;
          }

          &--middle {
            top: 50%;
            transform: translate(-50%, -50%);
          }

          &--bottom {
            bottom: -11px;
          }
        }
      }

      &--close {
        & .bar {
          &--top {
            transform: translate(-50%, 10.5px) rotate(45deg);
            transition: transform .3s cubic-bezier(0, .45, .47, 1);
          }

          &--middle {
            opacity: 0;
            transition: opacity .3s cubic-bezier(0, .45, .47, 1);
          }

          &--bottom {
            transform: translate(-50%, -10.5px) rotate(-45deg);
            transition: transform .3s cubic-bezier(0, .45, .47, 1)
          }
        }
      }
    }
  }
</style>
