<template>
  <div class="app">
    <div class="container">
      <div class="item step">
        <onboarding-steps v-bind:numStep="numStep" v-bind:actStep="actStep"></onboarding-steps>
      </div>
      <div class="item item-1" v-if="actStep===1">
        <p> Welcome to the Podlove Publisher Onboarding </p>
      </div>
      <div class="item item-1" v-if="actStep===2">
        <onboarding-basic v-bind:title="title" v-bind:subtitle="subtitle"/>
      </div>
      <div class="item item-1" v-if="actStep===3">
        <p> Daten fuer den Publisher: </p>
        <p> title {{title}} </p>
        <p> subtitle {{subtitle}} </p>
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
import OnboardingBasic from './components/OnboardingBasic.vue';
import OnboardingSteps from './components/OnboardingSteps.vue'
export default {
  components:{
    OnboardingSteps,
    OnboardingBasic
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
      numStep: 3,
      title: 'text',
      subtitle: '',
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
    grid-column: 1 / span 12;
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

