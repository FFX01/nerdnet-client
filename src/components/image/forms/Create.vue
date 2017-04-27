<template>
  <div class="image-form-create">
    <form @submit.prevent="submit">
      <div>
        <label>Title</label>
        <input type="text">
      </div>
      <div class="preview-wrapper">
          <img class="preview-image" :src="imagePreview" />
      </div>
      <div>
        <label>Image</label>
        <input type="file"
          @change="handleImageChange"
        >
      </div>
      <div>
        <label>Description</label>
        <textarea></textarea>
      </div>
      <div>
        <input type="submit" value="Save" @click.prevent="submit">
        <a id="cancel" @click="cancel">Cancel</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'image-form-create',
  data() {
    return {
      title: '',
      description: '',
      image: null,
      imagePreview: null
    }
  },
  methods: {
    handleImageChange(e) {
      let file = e.target.files[0]
      this.image = file
      this.renderImagePreview()
    },
    renderImagePreview() {
      let reader = new FileReader()
      reader.addEventListener('load', () => {
        this.imagePreview = reader.result
      }, false)
      reader.readAsDataURL(this.image)
    },
    submit() {
      let payload = new FormData()
      payload.append('title', this.title)
      payload.append('description', this.description)
      payload.append('image', this.image)
      payload.append('owner', this.$store.getters['auth/authUser'].pk)
      this.$store.dispatch('image/createNew', payload)
      this.$emit('submit')
    },
    cancel() {
      this.title = ''
      this.description = ''
      this.image = null
      this.imagePreview = null
      this.$emit('cancel')
    }
  }
}
</script>


<style scoped>
</style>
