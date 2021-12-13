import Vue from 'vue'
import Vuex from 'vuex'
import setting from '@/setting'

import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
console.log(axios)

Vue.use(Vuex)

const state = {
  transitionName: 'fade',
  navState: false,
  hogeData: null
}

const actions = {
  changeTransitionName ({ state, commit }, { name }) {
    commit('changeTransitionName', name)
  },
  changeNavState ({ state, commit }) {
    commit('changeNavState')
  },
  // sample get API
  setHogeData ({state, commit}) {
    return new Promise((resolve, reject) => {
      axios.get(
        setting.apiURL + 'hoge',
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then((res) => {
        console.log(res)
        commit('setHogeData', res)
        resolve(res)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  }
}

const mutations = {
  changeTransitionName (state, payload) {
    state.transitionName = payload
  },
  changeNavState (state, payload) {
    state.navState = !state.navState
  },
  setHogeData (state, payload) {
    state.hogeData = payload.data
  }
}

const getters = {
  transitionName: state => state.transitionName,
  navState: state => state.navState,
  hogeData: state => state.hogeData
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins: [createPersistedState(
    {
      key: 'wedding_mypage',
      // 明示的にsimplestorage/localstorageに保存するものを記載する
      reducer: state => ({
      })
    }
  )]
})
