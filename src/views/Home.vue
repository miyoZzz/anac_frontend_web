<template>
  <div id="home-container">
    <ac-header></ac-header>
    <!-- <div class="item1"></div> -->
    <ac-nav></ac-nav>
    <ac-left></ac-left>
    <ac-main></ac-main>
    <!-- <div class="item2"></div> -->
    <div class="item3"></div>
  </div>
</template>
<style lang="scss" scoped>
  #home-container {
    display: grid;
    grid-gap: $sp1;
    grid-template-rows:  0.6rem 1rem 12.13rem 0.6rem;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: "header header header"
                         "nav nav nav"
                         "left-aside main main"
                         "footer footer footer";
                        
    .item1 {
      grid-area: nav;
    }
    .item2 {
      grid-area: main;
    }
    .item3 {
      grid-area: footer;
    }

  }
</style>
<script>
import AcHeader from '../components/AcHeader'
import AcNav from '../components/AcNav'
import AcLeft from '../components/AcLeft'
import AcMain from '../components/AcMain'
  export default {
    name: 'Home',
    components: {
      AcHeader,
      AcNav,
      AcLeft,
      AcMain
    }
  }
</script>
