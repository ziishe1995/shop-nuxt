import Vue from 'vue'
import { Category } from '@/lib/constants'
Vue.mixin({
  data () {
    return {
      siteTitle: 'shop'
    }
  },
  watch: {
    $route () {

    }
  },
  methods: {
    onPageChange (page) {
      this.$router.push({ ...this.$route, query: { ...this.$route.query, page } })
    },
    resolveResource (url) {
      if (typeof url === 'string') {
        return url && url.includes('http') ? url : `//${process.env.RESOURCE_BASE_URL}/${url}`
      } else { return '' }
    },
    toCategoryIcon (category) {
      const i = Category.findIndex(t => t.code === category)
      return i > -1 ? Category[i].icon : ''
    }
    // routerAuthDetector (routerInfo) {
    //   if (!this.$auth.loggedIn) {
    //     this.openLoginPopup()
    //     return
    //   }
    //   this.$router.push(routerInfo)
    // }
  },
  head () {
    return {
      titleTemplate: (subName) => {
        const siteName = this.$store && this.$store.getters['site/name']
        return subName ? `${siteName} - ${subName}` : siteName
      }
    }
  }

})
