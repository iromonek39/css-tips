<template>
  <div class="menu">
    <div class="menu__body">
      <ul class="menu__list">
        <li class="menu__item">マイページ</li>
        <li class="menu__item">ログアウト</li>
      </ul>
    </div>
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
.menu {
  position: fixed;
  width: 400px;
  height: 100%;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 100;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: var(--vh);
  }

  &__list {
    padding: 40px;
    padding-top: 100px;
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
