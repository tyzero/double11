import AV, { User } from 'leancloud-storage'
import { SET_USER, SET_ERROR } from './mutations.type'
import { ACTION_LOGIN, ACTION_REGISTER } from './actions.type'
import * as config from '../../av'

AV.init({
  appId: config.appId,
  appKey: config.appKey
})

const state = {
  isLoading: true,
  currentUser: User.current(),
  isAuthenticated: !!User.current()
}

const getters = {}

const actions = {
  [ACTION_LOGIN]({ commit }, { email, password }) {
    return AV.User.logIn(email, password)
      .then(data => {
        commit(SET_USER, data.get('User'))
      })
      .catch(reason => {
        commit(SET_ERROR, reason)
        return Promise.reject(reason)
      })
  },

  [ACTION_REGISTER]({ commit }, { keys }) {
    let user = new AV.User()
    user.setUsername(keys)
    user.setPassword(Math.random().toString())
    // user.setEmail('admin@admin.com')
    return user.signUp()
      .then(loggedInUser => {
        commit(SET_USER, loggedInUser.get('User'))
      })
      .catch(error => {
        commit(SET_ERROR, error)
        return Promise.reject(error)
      })
  }
}

const mutations = {
  [SET_USER](state, user) {
    state.isAuthenticated = true
    state.currentUser = user
  },

  [SET_ERROR](state, error) {
    state.isAuthenticated = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
