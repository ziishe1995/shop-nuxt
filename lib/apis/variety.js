module.exports = {
  base: '',
  apis: {
    getLatestList: {
      method: 'get',
      url: 'variety/latest'
    },
    getTopList: {
      method: 'get',
      url: 'client/variety/topTen'
    },
    addToFav: {
      method: 'post',
      url: 'variety/favorite/add'
    },
    removeFromFav: {
      method: 'post',
      url: 'variety/favorite/remove'
    },
    addComment: {
      method: 'post',
      url: 'variety/comment'
    },
    getList: {
      method: 'get',
      url: 'variety/list/{sort}'
    },
    getTotal: {
      method: 'get',
      url: 'variety/total'
    },
    getOptions: {
      method: 'get',
      url: 'variety/options'
    },
    getDetail: {
      method: 'get',
      url: 'variety/info'
    },
    getCommentList: {
      method: 'get',
      url: 'variety/comments/list'
    },
    getCommentTotal: {
      method: 'get',
      url: 'variety/comments/total'
    },
    getSources: {
      method: 'get',
      url: 'variety/source'
    },
    getFavStatus: {
      method: 'get',
      url: 'variety/is_favorite'
    }
  }
}
