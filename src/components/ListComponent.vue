<template>
    <div class="row">
        <div class="col-md-15">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Date</th>
                        <th>Punch In</th>
                        <th>Punch Out</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user._id">
                        <td>{{ user['User ID'] }}</td>
                        <td>{{ user['User Name'] }}</td>
                        <td>{{ user.Date }}</td>
                        <td>{{ user['Punch In'] }}</td>
                        <td>{{ user['Punch Out'] }}</td>
                        <td class="d-flex justify-content-around">
                            
                            <router-link :to="{name: 'edit', params: { id: user._id }}" class="btn btn-success btn-lg">Edit
                            </router-link>
                            <button @click.prevent="deleteUser(user._id)" class="btn btn-danger btn-lg">Delete</button>
                            <router-link :to="{name: 'viewUser', params: { id: user._id }}" class="btn btn-info btn-lg">Details
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Users: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                //console.log(res.data)
                this.Users = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteUser(id){
                let apiURL = `http://localhost:4000/api/delete-user/${id}`;
                let indexOfArrayItem = this.Users.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Users.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>