<script>
import { RouterLink } from "vue-router";
export default {
  name: "User",
  props: {
    id: String,
    name: String,
    email: String,
  },
};
</script>
<template>
  <Router-link :to="{ name: 'usernotifications', params: { id: this.id } }">{{
    name
  }}</Router-link>

  <h2>{{ email }}</h2>
</template>

<style>
button {
  display: flex;
  place-items: center;
  place-content: center;
  width: 10rem;
  height: 32px;
  border-radius: 5px;

  color: var(--color-text);
}
</style>
