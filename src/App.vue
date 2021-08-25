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

export default {
    name: 'App',
}

</script>

<style>
  body {
    display: flex;
  }

  nav {
    width: 25%;
  }

  main {
    width: 100%;
    margin-left: 100px;
  }

</style>
