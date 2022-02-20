import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        idUser: 'pedro'
      }
    },
    mutations: {
      updateUser (state, id) {
        state.idUser = id
      }
    }
  })

export {store}