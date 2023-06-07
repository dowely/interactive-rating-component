import { defineStore } from "pinia";

interface State {
  rating: string | null;
  submitted: boolean;
}

export const useRatingStore = defineStore("Rating", {
  state: (): State => ({
    rating: null,
    submitted: false,
  }),
  actions: {
    setRating(rating: string) {
      this.rating = rating;
    },
    setSubmitted() {
      this.submitted = true;
    },
  },
});
