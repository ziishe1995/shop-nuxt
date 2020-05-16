module.exports = {
  base: '',
  apis: {
    getLatestList: {
      method: 'get',
      url: 'anime/latest'
    },
    getTopList: {
      method: 'get',
      url: 'client/anime/topTen'
    },
    addToFav: {
      method: 'post',
      url: 'anime/favorite/add'
    },
    removeFromFav: {
      method: 'post',
      url: 'anime/favorite/remove'
    },
    addComment: {
      method: 'post',
      url: 'anime/comment'
    },
    getList: {
      method: 'get',
      url: 'client/anime/{sort}'
    },
    getTotal: {
      method: 'get',
      url: 'client/anime/total'
    },
    getRegionOptions: {
      method: 'get',
      url: 'client/anime/region'
    },
    getYearOptions: {
      method: 'get',
      url: 'client/anime/years'
    },
    getGenresOptions: {
      method: 'get',
      url: 'client/anime/genres'
    },
    getStatusOptions: {
      method: 'get',
      url: 'client/anime/status'
    },
    getDetail: {
      method: 'get',
      url: 'client/anime/info'
    },
    getCommentList: {
      method: 'get',
      url: 'client/anime/comment'
    },
    getCommentTotal: {
      method: 'get',
      url: 'client/anime/comment/total'
    },
    getSources: {
      method: 'get',
      url: 'client/anime/episode'
    },
    getFavStatus: {
      method: 'get',
      url: 'client/anime/is_favorite'
    }
  }
}
