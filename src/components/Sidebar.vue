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

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>