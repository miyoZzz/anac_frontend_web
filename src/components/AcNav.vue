<template>
  <div id="nav-container"></div>
</template>

<script>
export default {
  name: 'AcNav'
}
</script>

<style lang="scss" scoped>
  #nav-container {
    display: grid;
    // border-top: .01rem solid gray ;
    background: $c2;
    grid-area: nav;
    box-shadow: $bs;
  }
</style>