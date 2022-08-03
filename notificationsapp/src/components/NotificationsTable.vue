<template>
  <v-data-table
    :headers="headers"
    :items="this.usernotifications"
    @click:row="readNotification"
  >
    <template v-slot:[`item.read`]="{ item }"
      ><v-chip :color="getColor(item.read)">{{
        item.read ? "yes" : "no"
      }}</v-chip></template
    >
    <template v-slot:[`item.notification_type`]="{ item }"
      >{{ getActorName(item.actorid) }}{{ item.notification_type }}</template
    >
  </v-data-table>
</template>

<script>
export default {
  props: ["usernotifications", "users", "headers"],
  methods: {
    async readNotification(value) {
      await fetch(
        `http://localhost:3000/notification/${value.notificationid}`,
        {
          method: "PUT",
        }
      ).then((res) => res.json());
      this.$emit("select", {});
    },
    getActorName(id) {
      const actor = this.users.find((elem) => elem.appuserid === id);
      return actor.first_name + " " + actor.last_name + " ";
    },
    getColor(read) {
      if (read) return "orange";
      return "blue";
    },
  },
};
</script>
