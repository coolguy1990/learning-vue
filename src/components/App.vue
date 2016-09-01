<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li>
            <router-link v-if="user" to="/logout">Logout</router-link>
            <router-link v-if="!user" to="/login">Login</router-link>
          </li>
          <li>
            <router-link v-if="user" to="/home">Home</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
  import auth from '../auth';

  export default {
    data() {
      return {
        user: auth.loggedIn()
      };
    }
  };
</script>
