import DeviceDetector from 'device-detector-js'

export default ({ app, store, $axios, redirect, isDev, req }, inject) => {
  const dd = new DeviceDetector()

  const device = function () {
    const _deviceMap = {
      Android: 'android',
      iOS: 'ios'
    }
    const userAgent = process.client ? navigator.userAgent : req.headers['user-agent']
    return _deviceMap[dd.parse(userAgent).os.name] || 'web'
  }
  const markKeyword = function (str, keyword, className = 'search_keyword') {
    return str.replace(new RegExp(keyword, 'g'), `<span class="${className}">${keyword}</span>`)
  }
  const host = process.client ? window.location.hostname : ''
  inject('utils', {
    host: process.env.SSR_TARGET_BRANCH || host,
    device: device(),
    markKeyword
  })
}
