<template>
    <div>
        <h2>Login page</h2>
        <el-form :model="user" ref="form" label-position='top'>
            <el-form-item label="Email">
                <el-input v-model="user.email" size="small" placeholder="Your email" clearable />
            </el-form-item>
            <el-form-item label="Password">
                <el-input v-model="user.password" size="small" placeholder="Your password" clearable />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" @click="login('form')">Login</el-button>
            </el-form-item>
        </el-form>

        <button @click="viewUserInfo()">View user info</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            login(form) {
                console.log(this.$store.dispatch('auth/login'))
            },
            viewUserInfo() {
                console.log(this.$store.state.auth.user)
            }
        }
    }
</script>

<style>

</style>