export default {
  gotUserInfo (state, info) {
    localStorage.setItem('userInfo', JSON.stringify(info))
    state.userInfo = info
  }
}
