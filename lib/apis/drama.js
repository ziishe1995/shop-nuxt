module.exports = {
  base: '',
  apis: {
    getLatestList: {
      method: 'get',
      url: 'drama/latest'
    },
    getTopList: {
      method: 'get',
      url: 'client/drama/topTen'
    },
    addToFav: {
      method: 'post',
      url: 'drama/favorite/add'
    },
    removeFromFav: {
      method: 'post',
      url: 'drama/favorite/remove'
    },
    addComment: {
      method: 'post',
      url: 'drama/comment'
    },
    getList: {
      method: 'get',
      url: 'drama'
    },
    getTotal: {
      method: 'get',
      url: 'drama/total'
    },
    getOptions: {
      method: 'get',
      url: 'drama/options'
    },
    getDetail: {
      method: 'get',
      url: 'drama/detail'
    },
    getCommentList: {
      method: 'get',
      url: 'drama/comment'
    },
    getCommentTotal: {
      method: 'get',
      url: 'drama/comment/total'
    },
    getSources: {
      method: 'get',
      url: 'drama/sources'
    },
    getFavStatus: {
      method: 'get',
      url: 'client/member/favorite/is_my_favorite'
    }
  }
}
