<template>
    <div class="container">
        <form class="form">
            <div class="form-group">
                <label>Username</label>
                <input type="text" v-model="username">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="text" v-model="password">
            </div>
            <div class="form-group">
 <a class="btn btn-primary" @click="login">Login</a>

            </div>
        </form>
    </div>
</template>

<script>

    import _ from 'lodash';

    export default {
        props: [''],
        data: function () {
            return {
                username: '',
                password: ''
            };
        },
        computed: {},
        watch: {},
        methods: {
            login: function() {
                this.$swal({
                    title: 'Hello',
                    text: `you type in a username of ${this.username} and a password of ${this.password}`
                });
            }
        },
        beforeCreate: function () { },
        created: function () { },
        beforeMount: function () { },
        mounted: function () { },
        beforeUpdate: function () { },
        updated: function () { },
        beforeDestroy: function () { },
        destroyed: function () { },
    }
</script>

<style lang="less" scoped rel="stylesheet/less">

</style>
