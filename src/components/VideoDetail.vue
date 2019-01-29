<template>
  <div class="list" v-if="selectedVideo.id">
    <div>
      {{ displayTitle }}
      <h6>{{ displayDescription }}</h6>
    </div>
    <div><iframe :src="displayVideo"></iframe></div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    selectedVideo: Object,
    required: true
  },
  computed: {
    displayTitle() {
      console.log(this.selectedVideo);
      return this.selectedVideo.snippet.title;
    },
    displayDescription() {
      return this.selectedVideo.snippet.description;
    },
    displayVideo() {
      return `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`;
    }
  }
};
</script>

<style scoped>
div {
  background-color: honeydew;
  font-size: 50px;
}

.list {
  display: inline-block;
  width: 50%;
}
</style>
