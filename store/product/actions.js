export default {
  async getProductList ({ commit, state }, data) {
    await commit('gotProductList', data)
  },
  async getCateProductList ({ commit, getters }, _data) {
    const cateId = Number(_data.cate)
    const data = getters.productList.filter(x => x.cate_id === cateId)
    await commit('gotCateProductList', data)
  },
  async getProduct ({ commit, getters }, _data) {
    const id = Number(_data.id)
    const data = getters.productList.find(x => x.id === id)
    await commit('gotProduct', data)
  },
  async getLikeProductList ({ commit, getters }) {
    const data = getters.productList.filter(x => x.like)
    await commit('gotLikeProductList', data)
  },
  async changeLikeProduct ({ commit, getters }, _data) {
    const id = _data.id
    const like = _data.like
    const data = []

    getters.productList.forEach((x) => {
      const obj = Object.assign({}, x)
      if (obj.id === id) {
        obj.like = like
      }
      data.push(obj)
    })

    await commit('gotProductList', data)
  },
  async addBasketList ({ commit, getters }, p) {
    const data = Object.assign([], getters.basketList)
    data.push(p)
    await commit('gotBasketList', data)
  },
  async delBasketList ({ commit, getters }, i) {
    const data = Object.assign([], getters.basketList)
    data.splice(i, 1)
    await commit('gotBasketList', data)
  },
  async cleanBasketList ({ commit, getters }) {
    const data = []
    await commit('gotBasketList', data)
  }
}
