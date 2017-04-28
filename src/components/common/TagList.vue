<template>
  <ul class="tag-list">
    <li v-for="tag in tags" key="tags.indexOf(tag)"
      class="tag"
    >
      {{tag}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tag-list',
  props: ['tags']
}
</script>
