<template>
  <div class="article-atom-gallery-image-box">
    <img :src="image.image_small" />
  </div>
</template>

<script>
export default {
  name: 'article-atom-gallery-image-box',
  props: ['image']
}
</script>
