export default {
  async login ({ commit, state }, _data) {
    const data = {
      email: _data.email,
      password: _data.password
    }
    if (data.email === 'user@user' && data.password === 'userpw') {
      await commit('gotUserInfo', data)
    } else {
      await commit('gotUserInfo', false)
    }
  },
  async logOut ({ commit, state }) {
    await commit('gotUserInfo', false)
  }
}
