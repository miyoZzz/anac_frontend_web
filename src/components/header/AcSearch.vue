<template>
  <div id="search-container">
    <div class="search-input">
      <!-- <label for="search">搜索：</label> -->
      <input type="search" placeholder="输入你感兴趣的内容">
      <button>搜索</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css_var.scss';
#search-container {
  display: grid;
  .search-input {
    place-self: center;
    border: $b1;
    border-radius: $br;
    input {
      height: $h1;
      width: 2.6rem;
      font-size: $f2;
      border-radius: $br;
      padding: 0.05rem;
    }
    button {
      height: .4rem;
      width: .6rem;
      font-size: $f2;
      color: $c1;
      margin-left: 0.01rem;
      border-left: $b1;
    }
  }
  
}
</style>

<script>
export default {
  name: 'AcSearch'
}
</script>