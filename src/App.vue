<template>
  <div class="wrapper">
    <Card />
  </div>
</template>

<script lang="ts">
import Card from "./components/Card.vue";

export default {
  name: "App",

  components: { Card },

  data() {
    return {
      greeting: "Howdy!",
    };
  },
};
</script>

<style lang="scss">
@import "./styles/index.scss";
</style>
