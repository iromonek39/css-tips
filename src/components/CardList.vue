<template>
  <div class="card-list">
    <div
      v-for="(item, index) in card"
      :key="index"
      class="card-list__inner">
      <div class="card-list__thumb">
        <img
          :src="item.img"
          :alt="item.title">
      </div>
      <div class="card-list__main">
        <h2 class="card-list__ttl">{{ item.ttl }}</h2>
        <p class="card-list__txt">{{ item.txt }}</p>
      </div>
      <div class="card-list__label-wrapper">
        <div
          v-for="(label, index) in item.labels"
          :key="index"
          class="card-list__label">
          {{ label }}
        </div>
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
      setting,
      card: [
        {
          img: require('@/assets/img/bg.png'),
          ttl: 'タイトル',
          txt: 'テキストテキストテキストテキストテキストテキストテキスト',
          labels: ['ラベル', 'ラベル']
        },
        {
          img: require('@/assets/img/bg.png'),
          ttl: 'タイトル',
          txt: 'テキストテキストテキストテキストテキストテキストテキスト',
          labels: ['ラベル', 'ラベル']
        },
        {
          img: require('@/assets/img/bg.png'),
          ttl: 'タイトル',
          txt: 'テキストテキストテキストテキストテキストテキストテキスト',
          labels: ['ラベル', 'ラベル']
        },
        {
          img: require('@/assets/img/bg.png'),
          ttl: 'タイトル',
          txt: 'テキストテキストテキストテキストテキストテキストテキスト',
          labels: ['ラベル', 'ラベル']
        },
        {
          img: require('@/assets/img/bg.png'),
          ttl: 'タイトル',
          txt: 'テキストテキストテキストテキストテキストテキストテキスト',
          labels: ['ラベル', 'ラベル']
        }
      ]
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
  gap: 20px;
  grid-auto-rows: minmax(60px, auto);
  grid-template-columns: repeat(3, 1fr);

  &__inner {
    box-sizing: border-box;
    cursor: pointer !important;
  }

  &__thumb {
    width: 100%;
    margin-bottom: 24px;

    & img {
      width: 100%;
      height: auto;
    }
  }

  &__main {
    margin-bottom: 10px;
  }

  &__ttl {
    margin-bottom: 4px;
  }

  &__label {
    padding: 0 14px;
    margin-bottom: 7px;
    border: 1px solid #eedcb3;
    border-radius: 15px;
    font-size: 12px;
    color: #edb53d;

    &-wrapper {
      display: flex;
      gap: 4px;
    }
  }
}
</style>
