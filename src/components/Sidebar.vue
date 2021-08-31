<template>
    <div>
        <el-menu default-active="0" :router='true' class="el-menu-vertical-demo">
            <el-menu-item  :index="menu.path" :key="index" v-for='(menu, index) in menus'>
                <i class="el-icon-menu"></i>
                <template #title>{{ menu.title }}</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>

export default {
    name: 'Sidebar',
    data() {
        return {
            menus: []
        }
    },
    created() {
        this.$router.options.routes.forEach(item => {
            if (item.title) this.menus.push(item)
        })
    }
}

</script>

<style scoped>

.el-menu {
  height: 100vh;
  background-color: #e0fbfc;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 5px 8px 24px;
}
.el-menu-item * {
  color: #000000;
  font-weight: 900;
}
.el-menu-item:hover {
  background-color: #457b9d;
  border-radius: 5px;
}
.el-menu-item:hover * {
  color: #fff;
}
</style>
