<template>
  <button
    :class="`btn--${color}`"
    class="btn"
    @click="linkTo('login')">
    <span class="btn__txt">{{ label }}</span>
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
    color: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
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

.btn {
  width: 300px;
  max-width: 240px;
  padding: 8px 60px;
  margin: 0 8px 42px;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  &--blue {
    background: #1880df;
    color: #fff;
  }

  &--white {
    background: #fff;
    border: 2px solid #333;
    color: #333;
  }
}
</style>
