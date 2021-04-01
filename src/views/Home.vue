<template>
  <div class="home">
    <ComponentPollution />
  </div>
</template>

<script>
import ComponentPollution from '@/components/ComponentPollution'
export default {
  name: 'Home',
  components: {
    ComponentPollution
  }
}
</script>

<style lang="scss" scoped>

.input {
  margin: auto;
  width: fit-content;
}
</style>
