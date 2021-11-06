<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="home-table">
                    <table>
                        <tr>
                            <td><router-link to="/login"><div class="table-item">UPLOAD</div></router-link></td>
                            <td><router-link to="/auth"><div class="table-item">LOGIN/MyPAGE</div></router-link></td>
                            <td><router-link to="/login"><div class="table-item">BEATMAKERS</div></router-link></td>
                        </tr>
                        <tr>
                            <td><router-link to="/login"><div class="table-item"><img src="@/img/Drum-Set-Silhouette.svg"/> DRUM-KIT</div></router-link></td>
                            <td><router-link to="/login"><div class="table-item"><img src="@/img/AJ_simple_turntable.svg"/>SAMPLE</div></router-link></td>
                            <td><router-link to="/login"><div class="table-item"><img src="@/img/drum-machine-music-producer-equipment-vector-24134853.jpg"/>BEAT</div></router-link></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage"
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

    .home-table {
        width: 100%;
        margin-top: 100px;
    }
    .home-table > table{
        width: 100%;
        table-layout: fixed;
    }
    .table-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #1d1b31;
        height: 200px;
        /*margin: 5px;*/
    }
    .table-item > img {
        height: 150px;
        width: 150px;
    }
    .table-item:hover{
        cursor: pointer;
        background: #0f0f1f;
    }
</style>