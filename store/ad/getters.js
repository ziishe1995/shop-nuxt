export default {
  ads: state => state.ads
    .reduce((obj, next) => {
      const items = next.advertisement
        .filter((ad) => {
          return ad.status === 'Y'
        })
        .map(t => ({
          id: t.id,
          title: t.title,
          url: t.url,
          imgUrl: t.image_path,
          newWin: t.is_blank === 'Y'
        }))
      obj[next.id] = items || []
      return obj
    }, {}),
  indexTopAds: (state, getters) => {
    return getters.ads[1] || []
  },
  indexBlockAds: (state, getters) => {
    return getters.ads[2] || []
  },
  filterTopAd: (state, getters) => {
    return _(getters.ads[3]).shuffle().head() || {}
  },
  filterBottomAd: (state, getters) => {
    return _(getters.ads[4]).shuffle().head() || {}
  },
  videoRightAd: (state, getters) => {
    return _(getters.ads[5]).shuffle().head() || {}
  },
  videoBlockAd: (state, getters) => {
    return _(getters.ads[6]).shuffle().head() || {}
  }
}
