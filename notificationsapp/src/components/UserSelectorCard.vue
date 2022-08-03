<template>
  <v-card
    ><v-app-bar-title class="text-h6"> App users </v-app-bar-title>
    <v-col v-for="user in this.users" :key="user.appuserid">
      <v-btn @click="$emit('select', user)">
        {{ user.first_name }}
      </v-btn>
    </v-col>
  </v-card>
</template>

<script>
export default {
    props: ["users"],
    beforeMount(){
        console.log(this.users)
    }
}
</script>