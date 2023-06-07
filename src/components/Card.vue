<template>
  <div class="card">
    <Image />
    <Rating v-if="submitted" />
    <Info />
    <FormComponent v-if="!submitted" />
  </div>
</template>

<script lang="ts">
import Image from "./Image.vue";
import Rating from "./Rating.vue";
import Info from "./Info.vue";
import FormComponent from "./FormComponent.vue";
import { mapState } from "pinia";
import { useRatingStore } from "@/store/RatingStore";

export default {
  name: "Card",
  components: { Image, Rating, Info, FormComponent },
  computed: {
    ...mapState(useRatingStore, ["submitted"]),
  },
};
</script>
