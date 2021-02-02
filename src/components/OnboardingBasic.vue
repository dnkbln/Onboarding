<template>
  <div class="root">
      <text-feld eingabe="title"/>
      <text-feld eingabe="subtitle"/>
  </div>
</template>

<script>
import TextFeld from './TextFeld.vue'
export default {
    components: {
        TextFeld
    },
    props: {
        'title': String,
        'subtitle': String,
    },
    methods: {
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped>
</style>