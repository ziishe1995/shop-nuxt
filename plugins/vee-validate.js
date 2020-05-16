import Vue from 'vue'
import * as rules from 'vee-validate/dist/rules'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN.json'
import { fields } from '@/lib/validate/field'

localize('zh_CN', {
  ...zhCN,
  names: fields
})

_(rules).forEach((rule, name) => {
  extend(name, rule)
})

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value)
    }
  },
  computesRequired: true,
  message: (fieldName, placeholder) => {
    return `${fields[fieldName] || fieldName}为必填`
  }
})

extend('account', {
  validate: val => /^\w{4,15}$/.test(val),
  message: '帐号格式错误'
})
extend('pw', {
  validate: val => /^\w{4,16}$/.test(val),
  message: '密码格式错误'
})
extend('phone', {
  validate: val => /^\d{11}$/.test(val),
  // validate: val => /^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\\d{8}$/.test(val),
  message: '手机格式错误'
})
extend('email', {
  validate: val => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/.test(val),
  // validate: val => /^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\\d{8}$/.test(val),
  message: 'E-MAIL格式错误'
})

extend('match', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: (fieldName, placeholder) => {
    return `${fields[fieldName] || fieldName}不符合`
  }
})

extend('pattern', {
  validate (val, { reg }) {
    return RegExp(reg).test(val)
  },
  params: ['reg'],
  message: '{_field_}规则不符'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
