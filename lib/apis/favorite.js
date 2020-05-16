module.exports = {
  base: 'client/member/favorite',
  apis: {
    getTypes: {
      method: 'get',
      url: 'type'
    },
    getList: {
      method: 'get',
      url: ''
    },
    getTotal: {
      method: 'get',
      url: 'total'
    },
    remove: {
      method: 'delete',
      url: ''
    },
    removeAll: {
      method: 'delete',
      url: 'remove_all'
    }
  }
}
