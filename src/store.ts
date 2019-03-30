import Vue from "vue";
import VuexORM from "@vuex-orm/core";
import Vuex from "vuex";

import User from "./models/User";

// Create a new database instance.
const database = new VuexORM.Database();

// Register Models to the database.
database.register(User);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [VuexORM.install(database)]
});
