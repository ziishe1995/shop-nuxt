export default {
  productList: state => state.productList || state.initProductList,
  cateProductList: state => state.cateProductList,
  product: state => state.product,
  likeProductList: state => state.likeProductList,
  basketList: state => state.basketList
}
