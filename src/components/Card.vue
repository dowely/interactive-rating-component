<template>
  <div class="card">
    <Image />
    <Rating v-if="submitted" />
    <Info />
    <FormComponent v-if="!submitted" @invalid="handleInvalid" />
    <p class="card__message" :class="{ 'card__message--visible': showMessage }">
      Please set a rating first
    </p>
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
  data() {
    return {
      showMessageTimeout: null,
      showMessage: false,
    };
  },
  computed: {
    ...mapState(useRatingStore, ["submitted"]),
  },
  methods: {
    handleInvalid() {
      clearTimeout(this.showMessageTimeout);

      this.showMessage = true;

      this.showMessageTimeout = setTimeout(
        () => (this.showMessage = false),
        2500
      );
    },
  },
};
</script>
