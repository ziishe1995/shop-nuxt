module.exports = {
  base: '',
  apis: {
    register: {
      method: 'post',
      url: 'client/register',
      custom: {
        silentErr: [
          '00001-11'
        ]
      }
    },
    getProfile: {
      method: 'get',
      url: 'client/profile'
    },
    updateProfile: {
      method: 'put',
      url: 'client/profile'
    },
    updatePw: {
      method: 'put',
      url: 'client/profile/password'
    },
    getVerificationCode: {
      method: 'post',
      url: 'client/register/send_verification_code',
      errMap: {
        '00001-5': '请输入正确的手机号'
      }
    }
  }
}
