<template>
  <div class="list">
    <ul>
      <VideoListItem
        @videoObjectToList="passVideoObjectUp"
        v-for="video in videos"
        :video="video"
        :key="video.etag"
      ></VideoListItem>
    </ul>
  </div>
</template>

<script>
import VideoListItem from "./VideoListItem";
export default {
  name: "VideoList",
  props: {
    videos: Array,
    required: true
  },
  components: { VideoListItem },
  methods: {
    passVideoObjectUp(video) {
      this.$emit("videoObjectToApp", video);
    }
  }
};
</script>

<style scoped>
.list {
  display: inline-block;
  width: 50%;
  float: right;
}
</style>
