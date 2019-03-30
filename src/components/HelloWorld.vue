<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex v-for="user in users" :key="user.id" xs12>
        {{ user.id }}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import User from "../models/User";

export default {
  mounted() {
    let user1 = {
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    };
    let user2 = {
      id: 2,
      name: "Ivan",
      email: "john@example.com"
    };
    User.insert({ data: user1 });
    User.insert({ data: user2 });
  },
  computed: {
    users() {
      return User.all();
    }
  },
  data: () => ({})
};
</script>

<style></style>
