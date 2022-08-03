<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col>
        <UserSelectorCard
          v-if="!selectedUser.first_name"
          :users="this.users"
          @select="selectUser" />
        <UserDashboard
          v-if="selectedUser.first_name"
          :users="this.users"
          :userid="this.selectedUser.appuserid"
          @select="selectUser"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
//import UserDashboardVue from "./UserDashboard.vue";
import UserDashboard from "./UserDashboard.vue";
import UserSelectorCard from "./UserSelectorCard.vue";
export default {
  name: "UserSelection",
  data: () => ({
    users: [],
    selectedUser: {},
  }),
  async beforeCreate() {
    await fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((elem) => {
          this.users.push(elem);
        });
      });
  },
  methods: {
    goToUserDashboard: function (id) {
      this.$router.push({ path: "/user", query: { id: id } });
    },
    selectUser: function (userData) {
      console.log(userData)
      this.selectedUser = userData;
      console.log("selected", this.selectedUser)
    },
  },
  components: { UserDashboard, UserSelectorCard },
};
</script>
