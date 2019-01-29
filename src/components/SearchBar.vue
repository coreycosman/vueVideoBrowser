<template>
  <div>
    <input @input="onInput" v-model="input" type="text" />
    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    onInput(e) {
      this.$emit("termChange", e.target.value);
    }
  }
};
</script>

<style lang="css"></style>
