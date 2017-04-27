<template>
  <div class="flex row flex-nowrap just-around p1">
    <div>
      <a class="link"
        v-if="previous"
        @click="onPreviousClick"
      >
        <i class="fa fa-arrow-left fa-2x"></i>
      </a>
    </div>
    <div>
      <p>{{numResults}}</p>
    </div>
    <div>
      <a class="link"
        v-if="next"
        @click="onNextClick"
      >
        <i class="fa fa-arrow-right fa-2x"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paginator',
  props: ['previous', 'next', 'count'],
  computed: {
    numResults() {
      return `${this.count} Results`
    }
  },
  methods: {
    onPreviousClick() {
      this.$emit('previous')
    },
    onNextClick() {
      this.$emit('next')
    }
  }
}
</script>
