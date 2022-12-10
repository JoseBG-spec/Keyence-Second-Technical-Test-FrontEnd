<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update User</h3>
      <form @submit.prevent="handleUpdateForm">
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
          <button class="btn btn-danger btn-block">Update</button>
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
      user: {},
    };
  },
  created() {
    let apiURL = `${process.env.VUE_APP_DB_URI}/edit-user/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.user = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `${process.env.VUE_APP_DB_URI}/update-user/${this.$route.params.id}`;

      axios
        .put(apiURL, this.user)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
