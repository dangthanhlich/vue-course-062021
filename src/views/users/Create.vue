<template>
    <div>
        <h2>Create new user</h2>
        <user-form></user-form>
    </div>
</template>

<script>

import UserForm from './_Form.vue';

export default {
    name: 'UserCreate',
    components: { UserForm },
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>

<style>

</style>