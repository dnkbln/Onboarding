<template>
  <div class="app">
    <div class="wrapper-mains">
      <div class="left-align">
        <onboarding-steps :numStep="5" :actStep="3"></onboarding-steps>
      </div>
    </div>
  </div>
</template>

<script>
import OnboardingSteps from './components/OnboardingSteps.vue'
export default {
  components:{
    OnboardingSteps
  }
}
</script>

<style scoped>
</style>

