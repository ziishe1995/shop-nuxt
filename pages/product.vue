<template>
  <div class="productCss">
    <ProductItem :product="product" />
    <el-row class="cateProductList">
      <el-col :span="22" :offset="1" class="text">
        Guess you may like it!
      </el-col>
      <div class="productListBox">
        <ProductList :product-list="cateProductList" />
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from '@/components/ProductItem'
import ProductList from '@/components/ProductList'

export default {
  name: 'LikeList',
  layout: 'main',
  components: {
    ProductItem, ProductList
  },
  watchQuery: true,
  async fetch ({ app, store, redirect, query }) {
    const data = {
      ...query
    }
    await store.dispatch('product/getProduct', data)
    await store.dispatch('product/getCateProductList', data)
  },
  computed: {
    ...mapGetters({
      product: 'product/product',
      cateProductList: 'product/cateProductList',
      userInfo: 'user/userInfo'
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
