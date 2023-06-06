<template>
  <div class="rating">
    <p class="rating__text">You selected 4 out of 5</p>
  </div>
</template>

<script lang="ts">
import { useRatingStore } from "@/store/RatingStore";
import { mapState } from "pinia";

export default {
  name: "Rating",
  computed: {
    ...mapState(useRatingStore, ["rating"]),
  },
};
</script>
