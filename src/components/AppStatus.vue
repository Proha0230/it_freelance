<template>
  <span :class="type">{{statusName()}}</span>
</template>

<script>
export default{
  props:['type'],
  methods:{

    statusName(){
      if(this.type === 'active'){
        return 'Активно'
      } else if(this.type === 'done'){
        return 'Выполнено'
      } else if(this.type === 'cancelled'){
        return 'Отменено'
      } else if(this.type === 'pending'){
        return 'В ожидании'
      }
    }

  }
}
</script>

<style scoped>

.done{
border: solid;
border-radius: 20px;
font-size: 15px;
padding: 0.3rem;
border-color: black;
border-width: 2px;
background: greenyellow;
color: black;
}

.active{
border: solid;
border-radius: 20px;
font-size: 15px;
padding: 0.3rem;
border-color: black;
border-width: 2px;
background: rgb(0 0 255);
color: white;
}

.cancelled{
border: solid;
border-radius: 20px;
font-size: 15px;
padding: 0.3rem;
border-color: black;
border-width: 2px;
background: #ff0600;
color: white;
}

.pending{
border: solid;
border-radius: 20px;
font-size: 15px;
padding: 0.3rem;
border-color: black;
border-width: 2px;
background: #ff9000;
color: black;
}

</style>