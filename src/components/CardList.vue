<template>
  <div class="card-list">
    <div class="card-list__inner">
      <div class="card-list__thumb">
        <img
          src="../assets/img/bg.png"
          alt="サムネイル">
      </div>
      <div class="card-list__main">
        <p class="card-list__txt">テキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
    </div>
    <div class="card-list__inner">
      <div class="card-list__thumb">
        <img
          src="../assets/img/bg.png"
          alt="サムネイル">
      </div>
      <div class="card-list__main">
        <p class="card-list__txt">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
    </div>
    <div class="card-list__inner">
      <div class="card-list__thumb">
        <img
          src="../assets/img/bg.png"
          alt="サムネイル">
      </div>
      <div class="card-list__main">
        <p class="card-list__txt">テキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
    </div>
    <div class="card-list__inner">
      <div class="card-list__thumb">
        <img
          src="../assets/img/bg.png"
          alt="サムネイル">
      </div>
      <div class="card-list__main">
        <p class="card-list__txt">テキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
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

.card-list {
  display: grid;
  gap: 10px 20px;
  grid-auto-rows: minmax(60px, auto);
  grid-template-columns: repeat(auto-fit, minmax(293px, 1fr));

  &__inner {
    box-sizing: border-box;
    cursor: pointer !important;
  }

  &__thumb {
    width: 100%;

    & img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
