module.exports = {
  base: '',
  apis: {
    getLatestList: {
      method: 'get',
      url: 'movie/latest'
    },
    getTopList: {
      method: 'get',
      url: 'client/movie/topTen'
    },
    addToFav: {
      method: 'post',
      url: 'movie/favorite/add'
    },
    removeFromFav: {
      method: 'post',
      url: 'movie/favorite/remove'
    },
    addComment: {
      method: 'post',
      url: 'movie/comment'
    },
    getList: {
      method: 'get',
      url: 'movie/client/{sort}/list'
    },
    getTotal: {
      method: 'get',
      url: 'movie/client/total'
    },
    getOptions: {
      method: 'get',
      url: 'movie/client/options'
    },
    getDetail: {
      method: 'get',
      url: 'movie/client/info'
    },
    getCommentList: {
      method: 'get',
      url: 'movie/client/comment/list'
    },
    getCommentTotal: {
      method: 'get',
      url: 'movie/client/comment/total'
    },
    getSources: {
      method: 'get',
      url: 'movie/client/source'
    },
    getFavStatus: {
      method: 'get',
      url: 'movie/client/is_favorite'
    }
  }
}
