export default {
  name: state => state.info.name,
  code: state => state.info.code,
  status: state => state.info.status === 'Y',
  allowRegister: state => state.info.is_register === 'Y',
  subPageContent: state => state.subPageContent
    .filter(t => t.status === 'Y')
    .reduce((obj, next) => {
      obj[next.code] = next
      return obj
    }, {}),
  about: (state, getters) => getters.subPageContent.About,
  privacy: (state, getters) => getters.subPageContent.Privacy,
  service: (state, getters) => getters.subPageContent.Service,
  faq: (state) => {
    return state.faq
      .filter(t => t.status === 'Y')
  },
  faqTotal: (state) => {
    return parseInt(state.faqTotal)
  },
  shownAppPopup: state => state.shownAppPopup

}
