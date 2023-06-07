<template>
  <div class="info">
    <h3 class="info__headline">
      {{ submitted ? "Thank you!" : "How did we do?" }}
    </h3>

    <p class="info__text">
      {{
        submitted
          ? "We appreciate you taking the time to give a rating. If you ever need more support, don&#8217;t hesitate to get in touch!"
          : "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
      }}
    </p>
  </div>
</template>

<script lang="ts">
import { useRatingStore } from "@/store/RatingStore";
import { mapState } from "pinia";

export default {
  name: "Info",
  computed: {
    ...mapState(useRatingStore, ["submitted"]),
  },
};
</script>
