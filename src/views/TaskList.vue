<template>

  <h1 class="text-white center" v-if="tasks.length < 1" >Задач пока нет</h1>

  <div >

    <div class="TaskPiec">
    <h3 class="text-white" v-if="tasks.length > 0" >Всего заданий: {{TaskPieces}}</h3>
    <h3 class="text-white" v-if="tasks.length > 0" >Активных заданий: {{TaskActive}}</h3>
    </div>

    <TaskItem
    v-for="taskitem in tasks"
    :tasksName="taskitem.title"
    :tasksData="taskitem.data"
    :tasksStatus="taskitem.status"
    :key="taskitem"
    :idStr="taskitem.id"
    ></TaskItem>
  
  </div>

</template>

<script>
import { useStore } from 'vuex'
import { ref, onBeforeMount, watch } from 'vue'
import TaskItem from './TaskItem.vue'

export default {

setup(){

const store = useStore()
const tasks = ref('')
const TaskActive = ref(store.getters.TaskActive)
const TaskPieces = ref(store.getters.TaskPieces)
const GetServer = ref(store.commit('GetServer'))

const Update = ()=>{
  GetServer
  tasks.value = store.state.tasks 
  TaskPieces.value = store.getters.TaskPieces
  TaskActive.value = store.getters.TaskActive
}

onBeforeMount(()=>{
  setTimeout(Update, 500)
})

watch(() => 
store.state.taskOpen,
() => {
setTimeout(Update, 1000)
})

return{tasks, TaskPieces, TaskActive}

},

components: {TaskItem}

}
</script>

<style>
.TaskPiec{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
}

@media (min-width: 915px) and (max-width: 2200px){
.TaskPiec{
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
}
</style>
