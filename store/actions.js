export default {
  async nuxtServerInit ({ commit, dispatch }, { redirect, store }) {
    await dispatch('site/getMenu')
  }
}
