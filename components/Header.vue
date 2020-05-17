<template>
  <div id="nav">
    <ul class="list-menu">
      <!--   START button in responsive menu    -->
      <input id="responsive-toggle" type="checkbox">

      <label id="btm-open-menu" for="responsive-toggle">
        <span />
        <span />
        <span />
        <span />
      </label>
      <!--   END button in responsive menu    -->

      <li class=" headerMenu item-menu shop">
        <i href="shop.html">shop</i>

        <!-- <ul class=" atozdeals-mobile-menu l-rounded sub-menu"> -->
        <ul class="  sub-menu">
          <li v-for="(c,i) in menu" :key="i" @click="closeMenu">
            <nuxt-link
              style="text-decoration:none"
              :to="{name: 'category', query: {
                cate:c.id
              }}"
            >
              <h3 class="title-sub-menu">
                {{ c.name }}
              </h3>
            </nuxt-link>
          </li>
          <!-- <li>
            <a href="#" class="icon fa fa-automobile">
              <span>Auto</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon fa fa-rocket">
              <span>Tech</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon fa fa-desktop">
              <span>School</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon fa fa-paper-plane">
              <span>Plane</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon fa fa-map-marker">
              <span>Places</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon fa fa-truck">
              <span>Delivery</span>
            </a>
          </li> -->
          <!---->
        </ul>
      </li>
      <li class="item-menu logo">
        <nuxt-link
          :to="{name: 'index'}"
        >
          SHOP
          <br>
          <span>Hi! nice to meet you.</span>
        </nuxt-link>
      </li>
      <li class="item-menu nav-icons">
        <label @click="clickHeart">
          <i class="fa fa-heart-o button-search" />
        </label>
        <!-- <label for="search-toggle">
          <i class="fa fa-search button-search" aria-hidden="true" />
        </label> -->
        <label for="modal-basket-toggle">
          <i class="fa fa-shopping-bag" aria-hidden="true" />
        </label>
        <label id="modalLogin" for="modal-login-toggle">
          <i class="fa fa-user" aria-hidden="true" />
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {},
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      menu: 'site/menu',
      userInfo: 'user/userInfo'
    })
  },
  methods: {
    clickHeart () {
      if (this.userInfo) {
        this.$router.push({ name: 'like-list' })
      } else {
        $('#modalLogin').click()
      }
    },
    closeMenu () {
      $('#btm-open-menu').click()
    }
  }
}
</script>
