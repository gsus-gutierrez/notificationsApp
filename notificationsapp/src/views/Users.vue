<script setup>
import { onBeforeMount, reactive } from "vue";
import User from "../components/User.vue";

let users = reactive([]);

onBeforeMount(async () => {
  await fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        users.push(elem);
      });
    });
});
</script>

<template>
  <main>
    <div v-for="user in users">
      <User :name="user.first_name" :email="user.email" :id="user.appuserid"/>
      <br/>
    </div>
  </main>
</template>
