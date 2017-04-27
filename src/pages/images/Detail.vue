<template>
  <div id="image-detail-page">
  </div>
</template>

<script>
export default {
  name: 'image-detail-page',
  computed: {
    image() {
      return this.$store.getters['image/detail']
    }
  },
  methods: {
    requestImage() {
      this.$store.dispatch('image/getDetail')
    }
  },
  mounted() {
    this.requestImage()
  }
}
</script>
