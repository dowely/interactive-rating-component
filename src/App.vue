<template>
  <h1>{{ greeting }}</h1>
</template>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      greeting: "Howdy!",
    };
  },
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
