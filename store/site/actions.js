export default {
  async getSubPageContent ({ commit, state }) {
    if (state.subPageContent.length > 0) { return }
    const res = await this.$api.site.getSubPageContent()
    if (res.code === '0') {
      commit('gotSubPageContent', res.data)
    }
  },
  async getInfo ({ commit }) {
    const res = await this.$api.site.getSiteInfo()
    if (res.code === '0') {
      commit('gotInfo', res.data)
    }
  },
  async getFaq ({ commit }, _d = {}) {
    const data = {
      page: _d.page,
      perpage: _d.perpage
    }
    const res = await this.$api.site.getFaq(data)
    if (res.code === '0') {
      commit('gotFaq', res.data)
    }
  },
  async getFaqTotal ({ commit }, _d = {}) {
    const data = {
      page: _d.page,
      perpage: _d.perpage
    }
    const res = await this.$api.site.getFaqTotal(data)
    if (res.code === '0') {
      commit('gotFaqTotal', res.data)
    }
  }
}
