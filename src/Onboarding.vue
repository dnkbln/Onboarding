<template>
  <div class="app">
    <div class="wrapper-mains">
      <div class="left-align">
        <onboarding-steps v-bind:numStep="numStep" v-bind:actStep="actStep"></onboarding-steps>
      </div>
    </div>
    <div class="eingabe" v-if="actStep===2">
      <text-feld title="Podcast Titel" />
      <text-feld title="Podcast Untertitel" />
    </div>
    <div class="nav">
      <button v-if="actStep > 1" v-on:click="prevStep">Prev</button>
      <button v-if="actStep < numStep" v-on:click="nextStep">Next</button>
    </div>
  </div>
</template>

<script>
import OnboardingSteps from './components/OnboardingSteps.vue'
import TextFeld from './components/TextFeld.vue'
export default {
  components:{
    OnboardingSteps,
    TextFeld
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
      actStep: 1,
      numStep: 3
    }
  }
}
</script>

<style scoped>
.box {
  position: relative;
}
.nav {
  position: bottom;
  margin: 30px;
}
</style>

