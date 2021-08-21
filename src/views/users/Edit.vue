<template>
    <div>
        <h2>Edir user</h2>
        <p>You are editing userID: {{ userId }}</p>
        <p v-if='groupId'>Group Id: {{ groupId }}</p>
    </div>
</template>

<script>
    export default {
        name: 'UserEdit',
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