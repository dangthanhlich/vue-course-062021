<template>
  <div class="container">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/user">User</router-link></li>
      <li><router-link to="/task">Task</router-link></li>
      <li><router-link to="/project">Project</router-link></li>
    </ul>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    display: inline-block;
  }

  ul li a {
    text-decoration: none;
    display: block;
    padding: 10px;
  }

</style>
