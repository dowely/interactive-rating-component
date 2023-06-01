<template>
  <div class="interactive-rating-component">
    <Card />
    <Attribution />
  </div>
</template>

<script lang="ts">
import Card from "./components/Card.vue";
import Attribution from "./components/Attribution.vue";

export default {
  name: "InteractiveRatingComponent",
  components: { Card, Attribution },
};
</script>
