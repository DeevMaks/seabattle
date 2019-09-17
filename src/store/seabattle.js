export default {
  state: {
    user: 'аноним',
    messages: [],
    socket: ''
  },
  getters: {
    me: state => state.user,
    messages: state => state.messages
  },
  mutations:{
    setName(state, name) {
      state.user = name;
    },

    setMessage(state, data) {
      state.messages.push(data);
    }
  },
  actions: {
    SOCKET_START({state, commit, dispatch}) {
      new Promise((resolve, reject) => {
        state.socket = new WebSocket('ws://localhost:8082/chat')
        state.socket.onopen = () => {
          console.log('Есть коннект')
          commit('setMessage', {author: 'system', message: 'Соединение установлено'})
          dispatch('SOCKET_OPEN')
          resolve();
        }
      })
    },
    SOCKET_OPEN({state, commit, dispatch}) {
      new Promise((resolve, reject) => {
        state.socket.onmessage = (event) => {
          commit('setMessage', JSON.parse(event.data))
          console.log(`получены данные: ${event.data}`)
        }

        state.socket.onclose = (event) => {
          if (event.wasClean) {
            console.log('Соединение закрыто')
            commit('setMessage', {author: 'system', message: 'Соединение закрыто'})
          } else {
            console.log('Соединение сброшено')
            commit('setMessage', {author: 'system', message: 'Соединение сброшено'})
          }
          console.log(`Код: ${event.code};  причина: ${event.reason}`)
        }

        state.socket.onerror = (error) => {
          console.log(`Ошибка: ${error.message}`)
          commit('setMessage', {author: 'system', message: `Ошибка: ${error.message}`})
        }
      })
    },

    SOCKET_SEND({state, commit, dispatch}, message) {
      new Promise((resolve, reject) => {
        state.socket.send(JSON.stringify(message))
      })
    }
  }
}
