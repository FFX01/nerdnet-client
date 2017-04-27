<template>
    <div id="people-index-page">
        <h2>People</h2>
        <p v-for="user in users.results">
          <router-link :to="{name: 'people-detail-page', params: {id: user.id}}">
            {{user.username}}
          </router-link>
        </p>
    </div>
</template>

<script>
import User from '@models/user'

export default {
    name: 'people-index-page',
    computed: {
      users() {
        return this.$store.getters['user/list']
      }
    },
    methods: {
        getUsers() {
            this.$store.dispatch('user/getList')
        }
    },
    mounted() {
        this.getUsers()
    }
}
</script>
