<template>
  <div class="button">
    <!-- ボタン -->
    <button
      class="btn btn--blue"
      @click="linkTo('login')">
      <span class="btn__txt">あります</span>
    </button>
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
.button {
  margin-top: 10px;
}

.btn {
  width: 300px;
  max-width: 240px;
  padding: 8px 60px;
  margin: 0 auto;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  &--blue {
    background: #1880df;
    color: #fff;
    margin-bottom: 42px;

    @media screen and (max-width: 767px) {
      margin-bottom: 32px;
    }
  }

  &--white {
    background: #fff;
    color: #1880df;
  }
}
</style>
