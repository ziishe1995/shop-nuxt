<template>
  <div>
    <div class="page-content">
      <div class="resize-me">
        <!----->
        <span class="title">Product</span>
        <ProductList :product-list="productList" />
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
  name: 'Index',
  layout: 'main',
  components: {
    ProductList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      productList: 'product/productList',
      userInfo: 'user/userInfo'
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
