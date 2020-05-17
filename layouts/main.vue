<template>
  <div>
    <Header />
    <nuxt class="mainDiv" />
    <LoginSignUp />
    <Basket />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header'
import LoginSignUp from '@/components/Modal/LoginSignUp'
import Basket from '@/components/Modal/Basket'

export default {
  name: 'Dashboard',
  components: {
    Header,
    LoginSignUp,
    Basket
  },
  computed: {
    ...mapGetters({
    })
  },
  mounted () {
  }
}
</script>
