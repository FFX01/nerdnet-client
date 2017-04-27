<template>
  <div class="user-form-edit">
    <form>

      <div>
        <label for="username">Username</label>
        <input id="username" type="text" v-model="userData.username" />
      </div>

      <div>
        <label>Avatar</label>
        <div id="current-avatar-wrapper" v-if="hasAvatar">
          <img id="current-avatar-image" :src="user.avatar.image_small">
        </div>
        <button v-if="!newAvatar"
          @click="handleChangeAvatar"
        >Change Avatar</button>
        <image-container-chooser v-if="newAvatar"
          @cancel="handleNewAvatarCancel"
          @select="handleNewAvatarSelect"
        ></image-container-chooser>
      </div>

      <div>
        <label for="bio">Bio</label>
        <textarea id="bio" v-model="userData.bio"></textarea>
      </div>

      <div>
        <input id="submit" type="submit" value="Save" @click="submit">
        <a id="cancel" @click="cancel">Back to Profile</a>
      </div>

    </form>
  </div>
</template>

<script>
import ImageContainerChooser from '@components/image/containers/Chooser.vue'

export default {
  name: 'user-form-edit',
  props: ['user'],
  components: {
    ImageContainerChooser
  },
  data() {
    return {
      newAvatar: false,
      userData: {
        username: '',
        bio: ''
      }
    }
  },
  watch: {
    user(newUser) {
      this.userData = newUser
    }
  },
  methods: {
    handleChangeAvatar() {
      this.newAvatar = true
    },
    handleNewAvatarCancel() {
      this.newAvatar = false
    },
    handleNewAvatarSelect(image) {
      this.newAvatar = false
      this.$emit('selectAvatar', image)
    },
    cancel() {
      this.$emit('cancel')
    },
    submit() {
      this.$emit('submit', this.userData)
    }
  },
  computed: {
    hasAvatar() {
      return this.user.avatar !== undefined & this.user.avatar !== null & !this.newAvatar
    }
  }
}
</script>

<style scoped>
</style>
