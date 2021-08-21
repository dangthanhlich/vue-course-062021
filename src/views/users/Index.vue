<template>
    <div>
        <h2>User management</h2>
        <p>
            <router-link to="/user/create">Create new</router-link>

            <table width='500' border="1" align='center'>
                <tr>
                    <td>test user 1</td>
                    <td>test user 1</td>
                    <td><router-link :to="{ name: 'user.edit', params: { id: 1 }}">Edit</router-link></td>
                </tr>
                <tr>
                    <td>test user 1</td>
                    <td>test user 1</td>
                    <td><router-link :to="{ name: 'user.edit', params: { id: 2 }}">Edit</router-link></td>
                </tr>
                <tr>
                    <td>test user 1</td>
                    <td>test user 1</td>
                    <td><router-link :to="{ name: 'user.edit', params: { id: 3 }}">Edit</router-link></td>
                </tr>
                <tr>
                    <td>test user 1</td>
                    <td>test user 1</td>
                    <td><router-link :to="{ name: 'user.edit', params: { id: 4 }}">Edit</router-link></td>
                </tr>
                 <tr>
                    <td>test user 1</td>
                    <td>test user 1</td>
                    <td><router-link to="/">Edit</router-link></td>
                </tr>
            </table>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'UserIndex',
        data() {
            return {

            }
        },
        created() {
            
        },
        methods: {

        }
    }
</script>

<style>

</style>