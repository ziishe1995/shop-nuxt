<template>
  <div>
    <div class="page-content">
      <div class="resize-me">
        <!----->
        <span class="title">{{ cateName }}</span>
        <ProductList :product-list="cateProductList" />
        <!----->
      </div>
      <div class="text" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductList from '@/components/ProductList'

export default {
  name: 'Category',
  layout: 'main',
  watchQuery: true,
  components: {
    ProductList
  },
  async fetch ({ app, store, redirect, query }) {
    const data = {
      ...query
    }
    const promiseArr = [
      store.dispatch('product/getCateProductList', data)
    ]
    await Promise.all(promiseArr)
  },
  async asyncData ({ store, redirect, query, params }) {
    const cateName = await store.getters['site/menu'].find(x => x.id === Number(query.cate)).name
    return {
      cateName
    }
  },
  computed: {
    ...mapGetters({
      cateProductList: 'product/cateProductList',
      userInfo: 'user/userInfo'
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
