import AV, { User } from 'leancloud-storage'
import { SET_USER, SET_ERROR } from './mutations.type'
import { ACTION_LOGIN, ACTION_REGISTER, ACTION_ADD_FRIEND } from './actions.type'
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

const getters = {
  isAuthenticated (state) {
    return state.isAuthenticated;
  },

  myFriends (state) {
    if (state.isAuthenticated) {
      const friends = state.currentUser.get('friends')
      return friends ? friends : []
    } else {
      return []
    }

  }
}

const actions = {
  [ACTION_LOGIN] ({ commit }) {
    return AV.User.logIn()
      .then(data => {
        commit(SET_USER, data)
      })
      .catch(reason => {
        commit(SET_ERROR, reason)
        return Promise.reject(reason)
      })
  },

  [ACTION_REGISTER] ({ commit }, { link }) {
    let user = new AV.User()
    user.setUsername(link)
    user.setPassword(Math.random().toString())
    // user.setEmail('admin@admin.com')
    return user.signUp()
      .then(loggedInUser => {
        commit(SET_USER, loggedInUser)
      })
      .catch(error => {
        commit(SET_ERROR, error)
        return Promise.reject(error)
      })
  },

  [ACTION_ADD_FRIEND] ({ commit }, { name, link }) {
    const friendStore = state.currentUser.get('friends')
    if (friendStore) {
      friendStore.push({ name, link })
      return state.currentUser.set('friends', friendStore).save().then()
    } else {
      return state.currentUser.set('friends', [{ name, link }]).save().then()
    }


  }

}

const mutations = {
  [SET_USER] (state, user) {
    state.isAuthenticated = true
    state.currentUser = user
  },

  [SET_ERROR] (state, error) {
    state.isAuthenticated = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
