<template>
  <div id="header-container">
    <ac-logo></ac-logo>
    <ac-search></ac-search>
    <ac-user></ac-user>
  </div>
</template>

<script>
import AcLogo from './header/AcLogo'
import AcSearch from './header/AcSearch'
import AcUser from './header/AcUser'
export default {
  name: 'AcHeader',
  components: {
    AcLogo,
    AcSearch,
    AcUser,
  },
  // methods: {
  //   goHome(){
  //     this.$router.push({path:'/'})
  //   } 
  // }
}
</script>

<style lang="scss" scoped>
#header-container {
  display: grid;
  grid-area: header;
  border-bottom: $b1;
  grid-gap: 0.1rem;
  grid-template-columns: 1.5fr 3fr 1.5fr;
}
  
</style>
