import ModularApi from 'modular-api'
import ErrMapper from 'error-mapper'
// import axios from 'axios'
import apiModules from '@/lib/apis'

export default (ctx, inject) => {
  ctx.$axios.defaults.validateStatus = (status) => {
    const isValid = status >= 200 && status < 300
    if (!isValid) {
      const errStatusHandlerConfig = {
        templateKey: 'status',
        map: require('~/lib/err/status'),
        defaultMsg: '请求状态错误',
        handleMsg: (msg, code) => {
          console.warn(msg, code)
        }
      }
      ErrMapper.register(status, errStatusHandlerConfig)
    }
    return isValid
  }
  if (process.server) {
    ctx.$axios.setHeader('referer', `${process.env.PROTOCOL}://${process.env.SSR_TARGET_BRANCH || ctx.req.headers.host}`)
  }

  const ApiHubInstance = ModularApi.bind(ctx.$axios)
  ctx.$axios.onResponse((res) => {
    const errCodeHandlerConfig = {
      templateKey: 'code',
      path: 'data.code',
      silentValue: '0',
      map: { ...require('~/lib/err/codes'), ...res.config.errMap },
      defaultMsg: '错误发生',
      handleMsg: (msg, code) => {
        ctx.app.router.app.$alert(msg)
      }
    }
    const isSilent =
    res.config.silentErr &&
    res.config.silentErr.includes(res.data.code && res.data.code[0])
    if (!isSilent) {
      ErrMapper.register(res, errCodeHandlerConfig)
    }
    return res.data
  })

  ApiHubInstance.registerMultiModule(apiModules)
  ctx.$api = ApiHubInstance.getModules()
  inject('api', ctx.$api)
}
