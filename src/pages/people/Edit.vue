<template>
  <div id="people-edit-page">
    <h1>Edit {{user.username}}</h1>
    <user-form-edit :user="user"
      @selectAvatar="handleSelectAvatar"
      @cancel="handleEditCancel"
      @submit="handleEditSubmit"
    ></user-form-edit>
  </div>
</template>

<script>
import UserFormEdit from '@components/user/forms/Edit.vue'

export default {
  name: 'people-edit-page',
  components: {
    UserFormEdit
  },
  computed: {
    user() {
      return this.$store.getters['user/detail']
    },
    authUser() {
      return this.$store.getters['auth/authUser']
    }
  },
  methods: {
    requestUser() {
      this.$store.dispatch('user/getDetail', this.$route.params.id)
    },
    handleSelectAvatar(image) {
      let payload = Object.assign({}, this.user, {
        avatar: {
          id: image.id
        }
      })
      this.$store.dispatch('user/updateDetail', payload)
    },
    handleEditCancel() {
      this.$router.push({name: 'people-detail-page', params: {id: this.user.id}})
    },
    handleEditSubmit(data) {
      this.$store.dispatch('user/updateDetail', data)
    }
  },
  mounted() {
    this.requestUser()
  }
}
</script>
