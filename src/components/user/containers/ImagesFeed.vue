<template>
  <div class="container">
    <div class="flex row flex-wrap just-around"
      v-if="images.results"
    >
      <image-box-medium v-for="image in images.results"
        key="image.id"
        :image="image"
        :showOwner="false"
      />
    </div>
    <paginator v-if="images.results"
      :previous="images.previous"
      :next="images.next"
      :count="images.count"
      @previous="getPreviousPage"
      @next="getNextPage"
    />
  </div>
</template>

<script>
import ImageBoxMedium from '@components/image/atoms/MediumBox.vue'
import Paginator from '@components/common/Paginator.vue'

export default {
  name: 'images-feed',
  props: ['user'],
  components: {
    ImageBoxMedium,
    Paginator
  },
  computed: {
    images() {
      return this.$store.getters['image/list']
    }
  },
  methods: {
    getImages() {
      this.$store.dispatch('image/getList', {'owner': this.user.id})
    },
    getPreviousPage() {
      this.$store.dispatch('image/previousPage')
    },
    getNextPage() {
      this.$store.dispatch('image/nextPage')
    }
  },
  mounted() {
    this.getImages()
  }
}
</script>
