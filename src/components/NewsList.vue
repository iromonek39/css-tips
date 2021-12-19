<template>
  <div class="news-list">
    <ul class="news-list__list">
      <li
        v-for="(item, index) in news"
        v-if="index > 0 && index < 4"
        :key="index"
        class="news-list__item">
        <a href="/">
          <div class="news-list__head">
            <div class="news-list__date">{{ item.date }}</div>
          </div>
          <div class="news-list__body">
            <p>{{ item.ttl }}</p>
          </div>
        </a>
      </li>
    </ul>
    <div class="btn-wrapper">
      <Btn
        :color="'blue'"
        :label="'もっと見る'"/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import setting from '@/setting.js'
import Btn from '@/components/Btn'

export default {
  name: 'NewsList',
  components: {
    setting,
    mapGetters,
    Btn
  },
  computed: {
    ...mapGetters([])
  },
  data () {
    return {
      setting,
      news: [
        {
          date: '2021/12/15',
          ttl: 'ニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトル'
        },
        {
          date: '2021/12/15',
          ttl: 'ニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトル'
        },
        {
          date: '2021/12/15',
          ttl: 'ニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトル'
        },
        {
          date: '2021/12/15',
          ttl: 'ニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトルニュースタイトル'
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
.news-list {
  &__list {
    margin-bottom: 60px;

    @media screen and (max-width: 767px) {
      margin-bottom: 40px;
    }
  }

  &__item {
    margin-top: 40px;

    a {
      display: block;
    }

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      opacity: .4;
    }
  }

  &__head {
    margin-bottom: 10px;
  }

  &__date {
    color: #808080;
  }
}

.btn-wrapper {
  text-align: center;
}
</style>
