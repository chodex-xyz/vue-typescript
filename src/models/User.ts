import { Model } from "@vuex-orm/core";

export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.increment(),
      name: this.string(""),
      email: this.string("")
    };
  }
}
