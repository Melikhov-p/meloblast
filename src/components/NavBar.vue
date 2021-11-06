<template>
        <div class="navbar">
        <div class="nav-content">
            <div class="nav-btns">
            <div class="search"><input v-model="inputValue" type="text" class="search-input"></div>
            <nav>
                <router-link to="/">Главная</router-link>
                <router-link to="/Tracks">Биты</router-link>
                <router-link to="/Tracks">Сэмплы</router-link>
                <router-link to="/Tracks">Драм-киты</router-link>
            </nav>
            </div>
            <div class="logo"><h1>MELOBLAST</h1></div>
            <div class="profile-btns">
                <div class="btn"><router-link to="/Auth">Войти</router-link></div>
            </div>
        </div>
        </div>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return{
            inputValue: '',
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .navbar {
        background: #0f0f1f;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 0.5px solid #560000;
    }
    .nav-content {
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    nav {
        padding-top: 15px;
    }
    nav > a{
        margin-right: 40px;
        font-size: 17px;
        text-decoration: none;
        color: white;
    }
    nav > a:hover{
        color: #560000;
    }
    .search > input{
        width: 87%;
        height: 35px;
        background: #1d1b31;
        border: 0px;
        border-radius: 10px;
        color: white;
        padding-left: 15px;
    }
    .nav-btns{
        display: flex;
        flex-direction: column;
    }
    .logo{
        justify-self: flex-start;
        margin-left: -25%;
    }
    .btn{
        border: 1px solid #2d2a4d;
        border-radius: 3px;
        padding: 8px;
        background: #1d1b31;
    }
    .btn > a{
        text-decoration: none;
        font-size: 20px;
        color: #6f6f98;
    }
    .btn:hover {
        cursor: pointer;
    }
</style>