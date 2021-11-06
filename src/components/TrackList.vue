<template>
    <div class="tracklist">
    <Track v-for="track in tracks" :key="track.id" v-bind:track="track"/>
        </div>
</template>

<script>
    import Track from "./Track";
    export default {
        name: "TrackList",
        components: {Track},
        props: {
            tracks: {
                type: Array,
                required: true
            },
        }
    }
</script>

<style scoped>
.tracklist{
    display: flex;
    flex-direction: column;
    width: 70%;
}
</style>