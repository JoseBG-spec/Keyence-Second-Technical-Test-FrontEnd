<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create User</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>User ID</label>
          <input
            type="text"
            class="form-control"
            v-model="user['User ID']"
            required
          />
        </div>

        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            class="form-control"
            v-model="user['User Name']"
            required
          />
        </div>

        <div class="form-group">
          <label>Date</label>
          <input
            type="date"
            class="form-control"
            v-model="user.Date"
            required
            onChange 
          />
        </div>

        <div class="form-group">
          <label>Punch In</label>
          <input
            type="time"
            class="form-control"
            v-model="user['Punch In']"
            required
          />
        </div>

        <div class="form-group">
          <label>Punch Out</label>
          <input
            type="time"
            class="form-control"
            v-model="user['Punch Out']"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        "User ID": "",
        "User Name": "",
        Date: "",
        "Punch In": "",
        "Punch Out": ""
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = `${process.env.VUE_APP_DB_URI}/create-user`;

      axios
        .post(apiURL, this.user)
        .then(() => {
          this.$router.push("/view");
          this.user = {
            "User ID": "",
            "User Name": "",
            Date: "",
            "Punch In": "",
            "Punch Out": ""
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
