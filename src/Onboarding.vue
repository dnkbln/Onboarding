<template>
  <div class="app">
    <div class="wrapper-mains">
      <div class="left-align">
        <onboarding-steps v-bind:numStep="numStep" v-bind:actStep="actStep"></onboarding-steps>
      </div>
    </div>
    <button v-if="actStep > 1" v-on:click="prevStep">Prev</button>
    <button v-if="actStep < numStep" v-on:click="nextStep">Next</button>
  </div>
</template>

<script>
import OnboardingSteps from './components/OnboardingSteps.vue'
export default {
  components:{
    OnboardingSteps
  },
  methods: {
    prevStep: function() {
      this.actStep = this.actStep - 1;
      if (this.actStep < 1)
        this.actStep = 1
    },
    nextStep: function() {
      this.actStep = this.actStep + 1;
      if (this.actStep > this.numStep)
        this.actStep = this.numStep;
    }
  },
  data () {
    return {
      actStep: 4,
      numStep: 5
    }
  }
}
</script>

<style scoped>
</style>

