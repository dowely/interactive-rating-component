<template>
  <form class="form">
    <input type="radio" name="rating" id="one" value="1" />
    <label for="one">1</label>

    <input type="radio" name="rating" id="two" value="2" />
    <label for="two">2</label>

    <input type="radio" name="rating" id="three" value="3" />
    <label for="three">3</label>

    <input type="radio" name="rating" id="four" value="4" />
    <label for="four">4</label>

    <input type="radio" name="rating" id="five" value="5" />
    <label for="five">5</label>

    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
export default {
  name: "FormComponent",
};
</script>
