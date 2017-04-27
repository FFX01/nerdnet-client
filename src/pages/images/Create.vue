<template lang="html">
  <div id="image-create-page">
    <form id="image-upload-form" @submit.prevent="handleSubmit">
      <div class="field">
        <label>File</label>
        <input type="file" name="name" value=""
          @change="handleFileChange"
        >
        <div class="error"
          v-if="uploadError.image"
        >
          <ul>
            <li v-for="error in uploadError.image">
              {{error}}
            </li>
          </ul>
        </div>
      </div>
      <div class="field">
        <label>Title</label>
        <input type="text" v-model="title" name="name" value="">
        <div class="error"
          v-if="uploadError.title"
        >
          <ul>
            <li v-for="error in uploadError.title">{{error}}</li>
          </ul>
        </div>
      </div>
      <div class="field">
        <label>Description</label>
        <textarea name="name" rows="8" cols="40"
          v-model="description"
        ></textarea>
        <div class="error"
          v-if="uploadError.description"
        >
          <ul>
            <li v-for="error in uploadError.description">{{error}}</li>
          </ul>
        </div>
      </div>
      <div class="field">
        <input type="submit" name="name" value="Save"
          @click.prevent="handleSubmit"
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'image-create-page',
  data() {
    return {
      title: '',
      description: '',
      image: null
    }
  },
  computed: {
    created() {
      return this.$store.getters['image/created']
    },
    uploadError() {
      return this.$store.getters['image/uploadError']
    }
  },
  methods: {
    handleSubmit() {
      let payload = new FormData()
      payload.append('title', this.title)
      payload.append('description', this.description)
      payload.append('image', this.image)
      payload.append('owner', this.$store.getters['auth/authUser'].pk)
      this.$store.dispatch('image/createNew', payload)
    },
    handleFileChange(e) {
      this.image = e.target.files[0]
    }
  }
}
</script>

<style lang="css">
</style>
