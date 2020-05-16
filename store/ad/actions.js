export default {
  async getAds ({ commit, state }) {
    if (state.ads.length > 0) { return }
    const res = await this.$api.ad.getAds()
    if (res.code === '0') {
      commit('gotAds', res.data)
    }
  }
}
