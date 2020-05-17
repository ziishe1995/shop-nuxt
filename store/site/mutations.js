export default {
  gotMenu (state) {
    const data = [
      {
        id: 1,
        name: 'Fashion'
      },
      {
        id: 2,
        name: 'Antiques'
      },
      {
        id: 3,
        name: 'Food'
      }
    ]
    //
    state.menu = data
  }
}
