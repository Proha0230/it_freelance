<template>
    <div class="card">
      <h2 class="card-title">
        {{tasksName}}
        <AppStatus :type="tasksStatus" />
      </h2>
      <p>
          <small>
            Дата: {{tasksData}}
          </small>
      </p>
      <router-link :to="'/it_freelance/task/' + idStr">
        <button class="btn primary">Посмотреть</button>  
      </router-link>
      <button class="btn danger" @click="DeleteTask">Х</button>
    </div>

</template>

<script>
import AppStatus from '../components/AppStatus'
import { ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

export default {

props:['tasksName','tasksData','tasksStatus','idStr'],

components: {AppStatus},

setup(props){

const idStr = ref(props.idStr)
const store = useStore()

const DeleteTask = async ()=> {    
await axios.delete(`https://it-my-freelance-default-rtdb.firebaseio.com/myTasksItems/${idStr.value}.json`)
store.state.tasks = store.state.tasks.filter(item => item.id !== idStr.value)
store.state.taskOpen = !store.state.taskOpen
}

return{ DeleteTask, idStr}

}
}

</script>

<style scoped>

.btn.danger{
float: right;
padding-left: 0.7rem;
padding-right: 0.7rem;
}

</style>