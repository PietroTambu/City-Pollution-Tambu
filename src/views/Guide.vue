<template>
  <div class="guide">
    <ComponentGuide />
  </div>
</template>

<script>
import ComponentGuide from '@/components/ComponentGuide'
export default {
  name: 'Guide',
  components: {
    ComponentGuide
  }
}
</script>

<style lang="scss" scoped>
.guide {
  margin-top: 30px;
  width: 100%;
}
</style>
