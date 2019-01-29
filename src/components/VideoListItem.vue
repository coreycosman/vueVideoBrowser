<template>
  <div>
    <li @click="onVideoSelect"><img :src="getVideoUrl" /></li>
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object,
    required: true
  },
  computed: {
    getVideoTitle() {
      return this.video.snippet.title;
    },
    getVideoUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit("videoObjectToList", this.video);
    }
  }
};
</script>

<style scoped>
li {
  border: 0.5em solid black;
  margin-bottom: 0.5em;
  background-color: orange;
  list-style: none;
  display: flex;
}

li:hover,
li:active {
  background-color: yellow;
  cursor: pointer;
}

img {
  height: 100%;
  vertical-align: middle;
}
</style>
