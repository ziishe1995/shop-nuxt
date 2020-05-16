export default {
  gotSubPageContent (state, data) {
    state.subPageContent = data
  },
  gotInfo (state, data) {
    state.info = data
  },
  gotFaq (state, data) {
    state.faq = data
  },
  gotFaqTotal (state, data) {
    state.faqTotal = data
  },
  changeAppPopupShownStatus (state, boolean) {
    state.shownAppPopup = boolean
  }
}
