export default {
  gotProductList (state, data) {
    state.productList = data
  },
  gotCateProductList (state, data) {
    state.cateProductList = data
  },
  gotProduct (state, data) {
    state.product = data
  },
  gotLikeProductList (state, data) {
    state.likeProductList = data
  },
  gotBasketList (state, data) {
    state.basketList = data
  }
}
