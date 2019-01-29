<template>
  <div data-test="app">
    <SearchBar @termChange="onTermChange"> </SearchBar>
    <div class="two-column">
      <VideoList
        @videoObjectToApp="setVideoObjectProp"
        :videos="videos"
      ></VideoList>
      <VideoDetail :selectedVideo="selectedVideo"></VideoDetail>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const VIDEO_KEY = process.env.VUE_APP_VIDEO_KEY;

export default {
  name: "App",
  components: { SearchBar, VideoList, VideoDetail },
  data() {
    return {
      videos: [],
      selectedVideo: {}
    };
  },
  methods: {
    async onTermChange(searchTerm) {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key: VIDEO_KEY,
              type: "video",
              part: "snippet",
              q: searchTerm
            }
          }
        );
        this.videos = res.data.items;
      } catch (error) {
        console.log(error);
      }
    },

    setVideoObjectProp(video) {
      this.selectedVideo = video;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.two-coulmn {
  display: flex;
}
</style>
