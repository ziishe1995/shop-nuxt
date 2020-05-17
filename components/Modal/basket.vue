<template>
  <div class="modal-basket-container">
    <input id="modal-basket-toggle" type="checkbox">
    <label class="modal-backdrop" for="modal-basket-toggle" />

    <div class="modal-content">
      <label id="modal-close-btn" class="modal-close-btn" for="modal-basket-toggle">
        <svg width="50" height="50">
          <line x1="10" y1="10" x2="40" y2="40" />
          <line x1="40" y1="10" x2="10" y2="40" />
        </svg>
      </label>

      <el-row v-if="basketList.length>0" class="modal-text">
        <el-col :span="24">
          <el-row v-for="(p,i) in basketList" :key="i" class="tabs" type="flex" align="bottom">
            <el-col :xs="8" :span="6" :offset="1">
              <el-avatar shape="square" style="width:100%;height:100px" fit="fill" :src="p.img" />
            </el-col>
            <el-col :xs="13" :span="15" :offset="1" class="nameText">
              <i class="fa fa-trash" @click="delBasket(i)" />
              <br>
              {{ p.name }}
              <br>
              $ {{ p.price }}
            </el-col>
          </el-row>
        </el-col>
        <el-col class="priceBox" :span="24">
          Total ${{ basketList.reduce((obj,next)=>obj+next.price,0) }}
        </el-col>
        <el-col :span="24">
          <div class="submitBtn" @click="cleanBasketList()">
            Check Out
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Basket',
  components: {},
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      basketList: 'product/basketList',
      userInfo: 'user/userInfo'
    })
  },
  methods: {
    async delBasket (i) {
      await this.$store.dispatch('product/delBasketList', i)
    },
    async cleanBasketList () {
      if (this.userInfo) {
        await this.$store.dispatch('product/cleanBasketList')
      } else {
        await $('#modal-close-btn').click()
        await $('#modalLogin').click()
      }
    }
  }
}
</script>
