<template>
    <div class="track">
        <div class="track-head">
            <div class="track-img">
                <img src="@/img/AJ_simple_turntable.svg" alt="Обложка"/>
            </div>
            <div class="track-info">
                <div class="main-info">
                    <div class="author">Автор:{{track.author}}</div>
                    <div class="track-name">Название:{{track.title}}</div>
                </div>
                <div class="sub-info">
                    <div class="track-genre">Жанр:{{track.genre}}</div>
                    <div class="track-tags">Тэги:{{track.tags}}</div>
                    <div class="price"><button class="btn">{{track.price}}</button></div>
                </div>
            </div>
        </div>
        <div class="track-player">
            ПЛЕЕР------------------------------------------------------------------------
        </div>
    </div>
</template>

<script>
    export default {
        name: "Track",
        props: {
            track: {
                type: Object,
                required: true,
            }
        },
    }
</script>

<style scoped>
    .track {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #560000;
        padding-bottom: 10px;
    }

    .track-head {
        display: flex;
        flex-direction: row;
        padding-top: 10px;
    }

    .track-img > img {
        height: 50px;
        width: 50px;
    }

    .track-info {
        display: flex;
        flex-direction: row;
        margin-left: 10px;
        width: 100%;
        justify-content: space-between;
    }
    .main-info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .sub-info{
        display:flex;
        flex-direction: row;
        width: 60%;
        justify-content: space-between;
        align-items: center;
    }
    .price{

    }
    .track:hover{
        background: #0f0f1f;
        border-radius: 10px;
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