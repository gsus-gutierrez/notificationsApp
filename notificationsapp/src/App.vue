<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <UserSelection/>
      <!-- <UserSelection/> -->
    </v-main>
  </v-app>
</template>

<script>
import UserSelection from './components/UserSelection.vue';
//import UserSelection from './components/UserSelection.vue';

export default {
  name: 'App',

  components: {
    UserSelection
},

  data: () => ({
    //
  }),
};
</script>
