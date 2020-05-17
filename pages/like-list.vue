<template>
  <div>
    <div class="page-content">
      <div class="resize-me">
        <!----->
        <!-- <span>{{ cateName }}</span> -->
        <!----->
        <ProductList :product-list="likeProductList" />
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
  async asyncData ({ store, redirect, query, params }) {
    const promiseArr = [
      store.dispatch('product/getLikeProductList')
    ]
    await Promise.all(promiseArr)
    return {
      likeProductList: store.getters['product/likeProductList']
    }
  },
  data () {
    return {
      animated: false
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo'
    })
  },
  methods: {
    // chunkRestList () {
    //   const data = _(this.productList).chunk(5).value()
    //   console.log(this.userInfo)
    //   return data
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
