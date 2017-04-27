<template>
  <div id="image-edit-page">
    <h2>Edit {{image.title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'image-edit-page',
  computed: {
    image() {
      return this.$store.getters['image/detail']
    }
  },
  methods: {
    requestImage() {
      this.$store.dispatch('image/getDetail', this.$route.params.id)
    }
  },
  mounted() {
    this.requestImage()
  }
}
</script>
