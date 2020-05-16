import Vue from 'vue'
import moment from 'moment'
import * as consts from '@/lib/constants'

export const date = val => moment(val).format('YYYY-MM-DD')
export const capitalize = (val) => {
  if (!val) { return '' }
  val = val.toString()
  return val.charAt(0).toUpperCase() + val.slice(1)
}
export const enumMap = (code, cate, category) => {
  const _cate = capitalize(cate)
  const i = consts[_cate] && consts[_cate].findIndex(t => t.code === code)
  if (category) {
    return i > -1 ? consts[_cate][category][i].label : '?'
  }
  return i > -1 ? consts[_cate][i].label : '?'
}

Vue.filter('date', date)
Vue.filter('capitalize', capitalize)
Vue.filter('enum', enumMap)
