<template>
  <div class="article-container-image-gallery">
    <article-atom-gallery-image-box v-for="image in images"
      v-if="images.length > 0"
      :image="image"
      :key="image.id"
    ></article-atom-gallery-image-box>
  </div>
</template>

<script>
import ArticleAtomGalleryImageBox from '@components/article/atoms/GalleryImageBox.vue'

export default {
  name: 'article-container-image-gallery',
  props: ['images'],
  components: {
    ArticleAtomGalleryImageBox
  }
}
</script>
