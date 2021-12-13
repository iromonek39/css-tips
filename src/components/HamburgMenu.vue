<template>
  <div>
    <div
      :class="{ 'is-active': isActive }"
      class="hamb-menu"
      @click="openMenu()">
      <span/>
      <span/>
      <span/>
    </div>
    <transition name="fade">
      <div
        v-show="isActive"
        class="nav-menu">
        <ul class="nav-menu__list">
          <li class="nav-menu__item">マイページ</li>
          <li class="nav-menu__item">ログアウト</li>
        </ul>
      </div>
    </transition>
  </div>
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
      setting,
      isActive: false
    }
  },
  methods: {
    openMenu () {
      console.log('open')
      this.isActive = !this.isActive
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
@import '../assets/css/mixins.css';
@import '../assets/css/variables.css';

.hamb-menu {
  position: absolute;
  right: 0;
  width: 80px;
  height: 100%;
  background: #1A6EB9;

  @media screen and (max-width: 767px) {
    width: 60px;
  }

  &:hover {
    cursor: pointer;
  }

  & span {
    display: block;
    position: absolute;
    width: 24px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .5s;
    background: #fff;

    @media screen and (max-width: 767px) {
      width: 20px;
    }

    &:first-child {
      top: 31px;

      @media screen and (max-width: 767px) {
        top: 23px;
      }
    }

    &:nth-child(2) {
      top: 50%;

      @media screen and (max-width: 767px) {
        top: 30px;
      }
    }

    &:last-child {
      top: 49px;

      @media screen and (max-width: 767px) {
        top: 37px;
      }
    }
  }

  &.is-active {
    & span {
      left: 28px;
      transition: .5s;

      @media screen and (max-width: 767px) {
        left: 20px;
      }

      &:first-child {
        top: 50%;
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:last-child {
        top: 50%;
        transform: rotate(-45deg);
      }
    }
  }
}

.nav-menu {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  background: #fff;
  z-index: 100;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100vh;
    top: 60px;
  }

  &__list {
    padding: 40px;
  }

  &__item {
    margin-bottom: 20px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
