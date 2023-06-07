<template>
  <div class="image">
    <img
      v-if="submitted"
      class="image__thanks"
      src="assets/illustration-thank-you.svg"
      alt="Mobile phone illustration"
    />
    <img
      v-else
      class="image__star"
      src="assets/icon-star.svg"
      alt="Star icon"
    />
  </div>
</template>

<script lang="ts">
import { useRatingStore } from "@/store/RatingStore";
import { mapState } from "pinia";

export default {
  name: "Image",
  computed: {
    ...mapState(useRatingStore, ["submitted"]),
  },
};
</script>
