<template>
  <ul class="tag-list">
    <li v-for="tag in tags" key="tags.indexOf(tag)"
      class="tag"
    >
      <router-link :to="{name: 'image-tag-index-page', params: {tag: tag}}">
        {{tag}}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tag-list',
  props: ['tags']
}
</script>
