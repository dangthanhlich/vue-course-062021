<template>
    <div style="display: flex;">
      <nav>
          <router-view name='Sidebar'></router-view>
      </nav>

      <main>
          <router-view></router-view>
      </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'App',
}

</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #edf6f9;
}
.app {
  display: flex;
}
main {
  padding: 0 20px;
  width: 100%;
  max-width: 100%;
}
h2 {
  margin-top: 0;
  background-color: #457b9d;
  height: 100%;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}

</style>
