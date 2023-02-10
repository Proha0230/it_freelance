<template>
<div class="TheNavbar">
    <h2>IT_Freelance</h2>
        <ul class="LinkNavBar" v-if="windowWidth > 615">
            <li>
                <router-link to="/it_freelance/">Все задания</router-link>
            </li>
            <li>
                <router-link to="/it_freelance/new">Создать</router-link>
            </li>
        </ul>
    <div v-if="windowWidth < 616" @click="menuOpen = !menuOpen">
        <div :class="{ 'container': true, 'change': menuOpen }">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <div class="BurgerMenu" v-if="menuOpen">
            <ul>
                <li>
                    <router-link to="/it_freelance/">Все задания</router-link>
                </li>
                <li>
                    <router-link to="/it_freelance/new">Создать</router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

export default{
    data(){
        return{
        windowWidth : null,
        menuOpen: false
        }
    },
    methods:{
    handleResize() {
    this.windowWidth = window.innerWidth
    }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },

}


</script>

<style scoped>

.TheNavbar{
border: solid;
border-color: white;
border-radius: 15px;
background: whitesmoke;
}

.LinkNavBar{
display: flex;
float: right;
margin-top: -3.7rem;
margin-right: 1rem;
}

.LinkNavBar a{
margin: 1rem;
color: black;
font-weight: bold;
}

.LinkNavBar li{
    list-style-type:none;
}
.BurgerMenu li{
    list-style-type:none;
}

.TheNavbar h2{
margin-left: 1rem;
font-weight: bold;
color: black;
}

/* ::marker {
color: transparent;
} */

/* Стили для гамбургер меню */
.container {
display: block;
cursor: pointer;
transform: translate(-50%, -50%);
float: right;
margin-top: -2.6rem;
margin-right: 1rem;
}

.bar1, .bar2, .bar3 {
width: 35px;
height: 5px;
background-color: #333;
margin: 6px 0;
transition: 0.4s;
}

.change .bar1 {
-webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
transform: rotate(-45deg) translate(-9px, 6px) ;
}

.change .bar2 {
opacity: 0;
}

.change .bar3 {
-webkit-transform: rotate(45deg) translate(-8px, -8px) ;
transform: rotate(45deg) translate(-8px, -8px) ;
}

/* Стили для ссылок в гамбургер меню */
.BurgerMenu{
    text-align: center;
}

.BurgerMenu li a {
margin: 1rem;
color: black;
font-weight: bold;
margin-right: 3rem;
}


</style>