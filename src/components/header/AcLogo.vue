<template>
  <div id="logo-container" @click="toHome">
    <span>anac</span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css_var.scss';

  #logo-container {
    display: grid;
    span {
      place-self: center;
      font-size: $f4;
      color: $c1;
    }
  }
</style>

<script>
export default {
  name: 'AcLogo',
  methods: {
    toHome(){
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>