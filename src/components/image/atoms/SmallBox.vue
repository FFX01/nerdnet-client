<template>
  <div class="image-atom-small-box"
    v-if="image !== undefined"
  >
    <div>
      <img :src="image.image_thumb">
    </div>
    <div>
      <p>{{image.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'image-atom-small-box',
  props: ['image']
}
</script>
