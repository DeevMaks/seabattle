export default {
  state: {
    user: 'devmart',
    messages: []
  },
  getters: {
    me: state => state.user,
    messages: state => state.messages
  },
  mutations:{
    setName(state, name) {
      state.user = name;
    }
  },
  actions: {
  },
}
