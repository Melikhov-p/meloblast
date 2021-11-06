<template>
    <div class="container">
        <div class="content">
            <TrackList v-bind:tracks="tracks"/>
            <div class="side-bar">
                SIDEBAR
            </div>
        </div>
    </div>
</template>

<script>
    // import axios from "axios";
    import TrackList from "../components/TrackList";
    export default {
        components: {TrackList},
        data() {
            return {
                tracks: [
                    {author: 'АВТОР', title: 'НАЗВАНИЕ', genre: 'ЖАНР', tags:'ТЭГИ', price: '111 р.'},
                    {author: 'АВТОР2', title: 'НАЗВАНИЕ2', genre: 'ЖАНР2', tags:'ТЭГИ2', price: '111 р.'},
                    {author: 'АВТОР3', title: 'НАЗВАНИЕ3', genre: 'ЖАНР3', tags:'ТЭГИ3', price: '111 р.'},
                    {author: 'АВТОР4', title: 'НАЗВАНИЕ4', genre: 'ЖАНР4', tags:'ТЭГИ4', price: '111 р.'},
                    {author: 'АВТОР5', title: 'НАЗВАНИЕ5', genre: 'ЖАНР5', tags:'ТЭГИ5', price: '111 р.'},
                ],
            }
        },
        // methods: {
        //      async LoadTracks(){
        //          try{
        //              const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        //              this.tracks = response.data;
        //              console.log(response.data)
        //          }
        //          catch (e) {
        //              alert('ошибка')
        //          }
        //      }
        //  },
        //  mounted() {
        //      this.LoadTracks();
        //  }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        color: white;
        font-size: 17px;
    }

    .content {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
    .side-bar{
        margin-left: 10%;
        width: 20%;
        background: red;
        margin-top: 10px;
    }
</style>
