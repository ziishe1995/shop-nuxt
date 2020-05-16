import Vue from 'vue'

export default ({ app, store, $axios, redirect, isDev, req }, inject) => {
  inject('bus', new Vue())
}
