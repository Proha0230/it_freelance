<template>
  <div class="card" >
    <h2>{{tasks[isOpen()].title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="tasks[isOpen()].status" /></p>
    <p><strong>ID Задания</strong>: {{ tasks[isOpen()].id}}</p>
    <p><strong>Дэдлайн</strong>: {{tasks[isOpen()].data}}</p>
    <p><strong>Описание</strong>: {{tasks[isOpen()].desc}}</p>
    <div class='TaskButton'>
      <button class="btn" @click="Status = 'active', EditTask()">Взять в работу</button>
      <button class="btn primary" @click="Status = 'done', EditTask()">Завершить</button>
      <button class="btn danger" @click="Status = 'cancelled', EditTask()">Отменить</button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus';
import { ref, onBeforeMount, watch} from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default {

components: {AppStatus},

setup(){

const store = useStore()
const tasks = ref('')
const route = useRoute()
const UrlId = ref('')
const Status = ref('')
const router = useRouter()

const EditTask = async ()=> {    
await axios.patch(`https://it-my-freelance-default-rtdb.firebaseio.com/myTasksItems/${UrlId.value}.json`,{
  status: Status.value
})
router.push('/it_freelance/')
}

const isOpen = (()=>{
let i = 0
for(i = 0; i < tasks.value.length; i++)
if(tasks.value[i].id === UrlId.value){
return i
}
})

onBeforeMount(()=>{
tasks.value = store.state.tasks 
UrlId.value = route.params.UrlId
})

  return {tasks, isOpen, EditTask, Status}

  }
}
</script>

<style>

.TaskButton{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;

}
.TaskButton button{
  margin: 0.5rem;
}

@media (min-width: 798px) and (max-width: 947px){

  .TaskButton{
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

}

@media (min-width: 648px) and (max-width: 797px){

.TaskButton{
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

}


</style>