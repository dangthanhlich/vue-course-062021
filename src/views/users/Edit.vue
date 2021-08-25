<template>
    <div>
        <h2>Edir user</h2>
        <user-form></user-form>
    </div>
</template>

<script>

import UserForm from './_Form.vue';

export default {
    name: 'UserEdit',
    components: { UserForm },
    data() {
        return {
            userId: null,
            groupId: null,
        }
    },
    created() {
        this.userId = this.$route.params.id
        
        if (this.$route.params.groupId) this.groupId = this.$route.params.groupId
    },
    methods: {

    }
}
</script>

<style>

</style>