<template>
  <div class="app">
    <div class="container">
      <div class="item step">
        <onboarding-steps v-bind:numStep="numStep" v-bind:actStep="actStep"></onboarding-steps>
      </div>
      <div class="item item-1" v-if="actStep===2">
        <text-feld title="Podcast Titel" />
      </div>
      <div class="item item-2" v-if="actStep===2">
        <text-feld title="Podcast Untertitel" />
      </div>
      <div class="item prev">
        <button v-if="actStep > 1" v-on:click="prevStep">Prev</button>
      </div>
      <div class="item space"> </div>
      <div class="item next">
        <button v-if="actStep < numStep" v-on:click="nextStep">Next</button>
      </div>
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
.container {
    display: grid;
    height: 96vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto 1fr auto;
}

.step {
    grid-column: 1 / span 12;
}

.item-1 {
    grid-column: 1 / span 3;
}

.item-2 {
    grid-column: 4 / span 9;
}

.prev {
    grid-column: 1 / span 1;
}
.space {
    grid-column: 2 / span 10;
}
.next {
    grid-column: 12 / span 1;
}

.item {
    padding: 8px;
    background-color: white;
    border: 4px solid tomato;
    border-radius: 6px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}
</style>

