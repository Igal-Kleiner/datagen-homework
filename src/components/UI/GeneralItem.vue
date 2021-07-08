<template>
  <div class='d-flex general-item'>
    <div class='item-content d-flex justify-center align-center text-capitalize primary--text'>
      <slot name='content' />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GeneralItem'
  }
</script>

<style scoped lang='sass'>
  .general-item
    min-height: 36px
  .item-content
    min-width: 64px
</style>
