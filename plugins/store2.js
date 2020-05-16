import store from 'store2'

export default (ctx, inject) => {
  ctx.$session = store.session
  inject('session', store.session)
}
