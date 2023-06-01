<template>
  <div class="card">
    <Image />
    <Rating />
    <Info />
    <FormComponent />
  </div>
</template>

<script lang="ts">
import Image from "./Image.vue";
import Rating from "./Rating.vue";
import Info from "./Info.vue";
import FormComponent from "./FormComponent.vue";

export default {
  name: "Card",
  components: { Image, Rating, Info, FormComponent },
};
</script>
