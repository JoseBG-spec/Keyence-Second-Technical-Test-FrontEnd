<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">View User</h3>
        <form @submit.prevent="handleUpdateForm">
          <div class="form-group">
            <label>User ID</label>
            <input
              type="text"
              class="form-control"
              v-model="user['User ID']"
              required
              :disabled="disabled == 1"
            />
          </div>
  
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              v-model="user['User Name']"
              required
              :disabled="disabled == 1"
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
              :disabled="disabled == 1"
            />
          </div>
  
          <div class="form-group">
            <label>Punch In</label>
            <input
              type="time"
              class="form-control"
              v-model="user['Punch In']"
              required
              :disabled="disabled == 1"
            />
          </div>
  
          <div class="form-group">
            <label>Punch Out</label>
            <input
              type="time"
              class="form-control"
              v-model="user['Punch Out']"
              required
              :disabled="disabled == 1"
            />
          </div>
          <div class="form-group">
          <button class="btn btn-success btn-block">Return</button>
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
        disabled : 1,
        user: {},
      };
    },
    created() {
      let apiURL = `http://localhost:4000/api/edit-user/${this.$route.params.id}`;
  
      axios.get(apiURL).then((res) => {
        this.user = res.data;
      });
    },
    methods: {
    handleUpdateForm() {
        this.$router.push("/view");
    }
    },
  };
  </script>
  