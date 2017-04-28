<template>
  <div id="image-container-chooser">

    <div class="header">
      <button class="add-new-btn"
        @click="handleAddNew"
        v-if="!addNew"
      >Add New</button>
      <image-form />
    </div>

    <div class="" v-if="images.results.length > 0">
      <div class="image-box"
        v-for="image in images.results"
        @click="selectImage(image)"
      >
        <div class="image-wrapper">
          <img :src="image.image_thumb" />
        </div>
        <div class="title-wrapper">
          <h5 class="title">{{image.title}}</h5>
        </div>
      </div>
    </div>

    <div class="no-content" v-if="images.results.length < 1">
      <h4>No Images</h4>
    </div>

    <div class="footer">
      <a id="cancel" @click="cancel">Cancel</a>
    </div>

  </div>
</template>

<script>
import ImageForm from '@components/image/forms/ImageForm.vue'

export default {
  name: 'image-container-chooser',
  props: ['user'],
  components: {
    ImageForm
  },
  data() {
    return {
      addNew: false
    }
  },
  computed: {
    images() {
      return this.$store.getters['image/list']
    },
    authUser() {
      return this.$store.getters['auth/authUser']
    }
  },
  methods: {
    requestImages() {
      let params = {
        'owner': this.authUser.pk
      }
      this.$store.dispatch('image/getList', params)
    },
    handleAddNew() {
      this.addNew = true
    },
    handleCancelNew() {
      this.addNew = false
    },
    handleNewImageSubmit() {
      this.requestImages()
      this.addNew = false
    },
    cancel() {
      this.$emit('cancel')
    },
    selectImage(image) {
      this.$emit('select', image)
    }
  },
  mounted() {
    this.requestImages()
  }
}
</script>

<style scoped>
</style>
