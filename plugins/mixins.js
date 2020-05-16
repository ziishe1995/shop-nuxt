import Vue from 'vue'
import { Category } from '@/lib/constants'
Vue.mixin({
  data () {
    return {
      siteTitle: '抖影电影 DOING MOVIE'
    }
  },
  watch: {
    $route () {
      $.fancybox.close()
    }
  },
  methods: {
    openLoginPopup () {
      const vm = this
      $.fancybox.open({
        href: '#login_dialog',
        type: 'inline',
        wrapCSS: 'fancybox-login',
        padding: 40,
        width: 800,
        maxWidth: '100%',
        helpers: {
          overlay: {
            css: {
              background: 'rgba(0,0,0,.8)'
            }
          }
        },
        afterClose () {
          vm.$bus.$emit('login/clearForm')
        }
      })
    },
    openRegisterPopup () {
      const vm = this
      $.fancybox.open({
        href: '#register_dialog',
        type: 'inline',
        wrapCSS: 'fancybox-login',
        padding: 40,
        width: 800,
        maxWidth: '100%',
        helpers: {
          overlay: {
            css: {
              background: 'rgba(0,0,0,.8)'
            }
          }
        },
        afterClose () {
          vm.$bus.$emit('register/clearForm')
          vm.$bus.$emit('register/setStep', 'step1')
        }
      })
    },
    openSearchPopup () {
      $('#searchModal').modal('show')
      $('#searchModal').on('hidden.bs.modal', (e) => {
        this.$bus.$emit('search/clearForm')
      })
    },
    onPageChange (page) {
      this.$router.push({ ...this.$route, query: { ...this.$route.query, page } })
    },
    resolveResource (url) {
      if (typeof url === 'string') {
        return url && url.includes('http') ? url : `//${process.env.RESOURCE_BASE_URL}/${url}`
      } else { return '' }
    },
    shareTo (type, subTitle) {
      const url = location.href
      let title = document.title
      if (subTitle) {
        title = `${title} - ${subTitle}`
      }
      let link
      if (type === 'telegram') {
        link = `https://telegram.me/share/url?url=${url}&text=${title}`
      } else if (type === 'qq') {
        link = `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}`
      }
      window.open(link, '_blank', 'height=600,width=800')
    },
    toCategoryIcon (category) {
      const i = Category.findIndex(t => t.code === category)
      return i > -1 ? Category[i].icon : ''
    },
    routerAuthDetector (routerInfo) {
      if (!this.$auth.loggedIn) {
        this.openLoginPopup()
        return
      }
      this.$router.push(routerInfo)
    }
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
