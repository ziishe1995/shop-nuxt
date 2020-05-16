export default async function ({ app, store, redirect, query }) {
  await store.dispatch(`${query.category}/getSources`, query.id)
  const sources = store.getters[`${query.category}/sources`]
  const episodeBySource = store.getters[`${query.category}/episodeBySource`]
  if (!(episodeBySource[query.source] && episodeBySource[query.source][query.episode])) {
    // 如果query沒有播放集數時, 找尋有播放集數的來源
    const i = sources.findIndex(t => t.episodes.length > 0)
    if (i === -1) {
      app.router.app.$alert('沒有播放來源')
      return redirect('/')
    }
    const source = sources[i].id
    const episode = sources[i].episodes[0].id
    redirect({ name: 'tv-video-detail', query: { ...query, source, episode, t: new Date().getTime() } })
  }
}
