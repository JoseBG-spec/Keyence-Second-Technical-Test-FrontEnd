<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-dark bg-danger justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <router-link class="navbar-brand float-left" to="/view"><img src="./assets/Keyence-Logo.wine.png" alt ="Keyence Logo" class="rounded float-left"/></router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="navbar-brand" to="/create">Create User</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/view">View Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/upload">Upload User CSV</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
