<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Upload User CSV</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>CSV File or XLSX</label>
            <input
              type="file"
              class="form-control"
              required
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              @change="uploadFile"
              ref="file"
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
        file: null
      };
    },
    methods: {
      uploadFile() {
        this.file = this.$refs.file.files[0];
      },
      handleSubmitForm() {
        const formData = new FormData();
        formData.append('file', this.file);
        let apiURL = "http://localhost:4000/api/upload-file";
  
        axios
          .post(apiURL, formData)
          .then(() => {
            this.$router.push("/view");
            this.file = null
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  