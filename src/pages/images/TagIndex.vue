<template>
  <div>
    <div>
    </div>
    <div>
      <image-box v-for="image in images.results" :image="image"
        :key="image.id"
        :showOwner="false"
      />
    </div>
  </div>
</template>

<script>
import ImageBox from '@components/image/atoms/MediumBox.vue'

export default {
  name: 'image-tag-index-page',
  components: {
    ImageBox
  },
  computed: {
    images() {
      return this.$store.getters['image/list']
    },
    tag() {
      return this.$route.params.tag
    }
  },
  watch: {
    tag(oldval, newval) {
      if (oldval !== newval) {
        this.getImages()
      }
    }
  },
  methods: {
    getImages() {
      this.$store.dispatch('image/getList', {
        "tags": this.tag
      })
    }
  },
  mounted() {
    this.getImages()
  }
}
</script>
