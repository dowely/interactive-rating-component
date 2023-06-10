<template>
  <form class="form" @submit.prevent="handleSubmit">
    <template v-for="(val, key) in scores">
      <input
        type="radio"
        name="rating"
        :id="val"
        :value="key"
        @input="handleInput"
        hidden
      />
      <label
        :for="val"
        class="form__label"
        :class="{ 'form__label--active': String(key) === rating }"
        >{{ key }}</label
      >
    </template>

    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { useRatingStore } from "@/store/RatingStore";
import { mapActions, mapState } from "pinia";

export default {
  name: "FormComponent",
  data() {
    return {
      scores: {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
      },
    };
  },
  computed: {
    ...mapState(useRatingStore, ["rating"]),
  },
  methods: {
    ...mapActions(useRatingStore, ["setRating", "setSubmitted"]),
    handleInput(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.setRating(value);
    },
    handleSubmit(event: Event) {
      if (!this.rating) {
        alert("Please set a rating before submitting.");
        return;
      }
      this.setSubmitted();
    },
  },
};
</script>
