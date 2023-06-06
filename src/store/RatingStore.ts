import { defineStore } from "pinia";

export const useRatingStore = defineStore("Rating", {
  state: () => ({
    rating: null,
    submitted: false,
  }),
});
