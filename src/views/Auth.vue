<template>
    <div class="container">
        <div class="content">
            <div class="auth-form">
                <h1>Авторизация</h1>
                <form>
                    <input type="text" placeholder="LOGIN" v-model="LoginValue"/>
                    <input type="password" placeholder="PASSWORD" v-model="PasswordValue"/>
                    <button class="btn">Войти</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Auth",
        data(){
            return{
                LoginValue:'',
                PasswordValue:'',
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
    }

    .content {
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }
    .auth-form{
        display: flex;
        margin-top: 100px;
        flex-direction: column;
        align-items: center;
    }
    .auth-form > h1 {
        color: #6f6f98;
        margin-bottom: 15px;
    }
    .switcher{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 15px;
    }
    .switcher > .login{
        background: #1d1b31;
        border: 1px solid #2d2a4d;
        border-radius: 10px;
        padding: 5px;
        border-right: 0px;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        color: #6f6f98;
    }
    .switcher > .register{
        background: #1d1b31;
        border: 1px solid #2d2a4d;
        border-radius: 10px;
        padding: 5px;
        border-left: 0px;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        width: 300px;
        height: 45px;
        background: #1d1b31;
        border: 0px;
        border-radius: 10px;
        color: white;
        padding-left: 15px;
        margin-bottom: 15px;
    }
    .btn{
        border: 1px solid #2d2a4d;
        border-radius: 3px;
        padding: 8px;
        background: #1d1b31;
        color: #6f6f98;
        font-size: 20px;
    }
    .btn:hover{
        cursor: pointer;
    }
</style>