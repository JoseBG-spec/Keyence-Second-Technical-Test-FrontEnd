<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Login</h3>
        <img src="../assets/Keyence-Logo.wine.png" alt ="Keyence Logo" class="rounded mx-auto d-block"/>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              v-model="user.UserID"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              v-model="user.UserName"
              required
            />
          </div>
  
          <div class="form-group">
            <button class="btn btn-danger btn-block ">Create</button>
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
          UserID: "",
          UserName: "",
          Date: "",
          PunchIn: "",
          PunchOut: ""
        },
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/api/create-user";
  
        axios
          .post(apiURL, this.user)
          .then(() => {
            this.$router.push("/view");
            this.user = {
              UserID: "",
              UserName: "",
              Date: "",
              PunchIn: "",
              PunchOut: ""
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  