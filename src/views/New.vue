<template>
  <form class="card">
    <h1>Создать новое задание</h1>

    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="titleInput">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="dateInput">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="descInput"></textarea>
    </div>

    <button class="btn primary" @click.prevent="submit">Создать</button>
  </form>
</template>


<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios  from 'axios'

export default{
  setup(){

  const router = useRouter()
  const titleInput = ref('')
  const dateInput = ref(null)
  const descInput = ref('')
  const statusinfo = ref('pending')

  const submit = async ()=> {
    const str = JSON.stringify({
          title: titleInput.value,
          data: dateInput.value,
          desc: descInput.value,
          status: statusinfo.value
        })
    await axios.post('https://it-my-freelance-default-rtdb.firebaseio.com/myTasksItems.json', str)
    router.push('/it_freelance/')
  }
  
  return{
    titleInput,
    descInput,
    dateInput,
    submit
  }
},
}
</script>