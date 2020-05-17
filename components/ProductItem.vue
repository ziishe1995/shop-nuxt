<template>
  <div class="container">
    <div class="product-image">
      <img :src="product.img" :title="product.name" :alt="product.name">
    </div>

    <div class="product-description">
      <h1>{{ product.name }}</h1>
      <span>$ {{ product.price }}</span>
      <p>
        Hi! My name is {{ product.name }}, nice to meet you.
      </p>
    </div>
    <div class="product-sizes clickHeart clickCart">
      <label class="heart" :class="{'selected':product.like,'unSelected':!product.like}" @click="clickHeart">
        <i class="fa fa-heart-o" style="margin-bottom:3px" />
      </label>
      <i class="fa fa-shopping-cart" style="cursor: pointer;" @click="addBasket(product)" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProductItem',
  components: {},
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo'
    })
  },
  methods: {
    async  addBasket (p) {
      await this.$store.dispatch('product/addBasketList', p)
    },
    async  changeLike () {
      const product = Object.assign({}, this.product)
      const data = Object.assign(product, { like: !product.like })
      await this.$store.dispatch('product/changeLikeProduct', data)
      await this.$store.dispatch('product/getProduct', { cate: data.cate_id, id: data.id })
    },
    clickHeart () {
      if (this.userInfo) {
        this.changeLike()
      } else {
        $('#modalLogin').click()
      }
    }
  }
}
</script>
