import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({

  state() {
    return {
      tasks: [],
      taskOpen: false,
      task: null,
    }
  },

  getters: {
    TaskPieces(state){
      return state.tasks.length
    },
    TaskActive(state){
      return state.task = state.tasks.filter(item => item.status == 'active').length
    },
  },

  mutations: {
    
    async GetServer(state){
      const {data} = await axios.get('https://it-my-freelance-default-rtdb.firebaseio.com/myTasksItems.json')
      state.tasks = Object.keys(data).map(key=>{
        return{
          id: key,
          ...data[key]
        }
      })
      },

      taskChange(state){
      return state.taskOpen = !state.taskOpen
      },

  },

  actions: {
  },

  modules: {
  }
})
