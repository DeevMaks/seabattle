import io from 'socket.io-client'

export default {
  state: {
    user: 'devmart',
    messages: [],
    socket: {}
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

    SOCKET_CONNECT: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
        state.socket = io('ws://localhost:8083')
        state.socket.on('message', data => {
          console.log(data)
        })
        resolve()
      })
    },

    SOCKET_SEND: ({commit, dispatch}, data) => {
      return new Promise((resolve, reject) => {
        state.socket.emit('message', {name: state.me, message: data})
        resolve()
      })
    },

  }
}
