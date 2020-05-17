<template>
  <div v-if="productList.length>0">
    <el-row v-for="(group, index) in chunkRestList()" :key="index" type="flex" justify="center" class="indec-card">
      <el-col :span="20" :xs="24">
        <section class="card-sm__container">
          <section
            v-for="(p,i) in group"
            :key="i"
            class="clickHeart card-sm"
            :style="'background-image:url('+p.img+')'"
          >
            <!-- @click="p.like=!p.like" -->
            <label class="heart" :class="{'selected':p.like,'unSelected':!p.like}" @click="clickHeart(p)">
              <i class="fa fa-heart-o" style="margin-bottom:3px" />
            </label>
            <nuxt-link
              :to="{name: 'product', query: {
                cate:p.cate_id,id:p.id
              }}"
            >
              <p class="card__text-sm">
                $ {{ p.price }}
              </p>
              <p class="card__text-lg">
                {{ p.name }}
              </p>
            </nuxt-link>
          </section>
        </section>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProductList',
  components: {},
  props: {
    productList: {
      type: Array,
      default: () => []
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
    chunkRestList () {
      const data = _(this.productList).chunk(5).value()
      return data
    },
    async  changeLike (p) {
      const product = Object.assign({}, p)
      const data = Object.assign(product, { like: !product.like })
      await this.$store.dispatch('product/changeLikeProduct', data)
      await this.$store.dispatch('product/getCateProductList', { cate: data.cate_id, id: data.id })
    },
    clickHeart (p) {
      if (this.userInfo) {
        this.changeLike(p)
      } else {
        $('#modalLogin').click()
      }
    }
  }
}
</script>
