<template>
  <div id="left-container">
    <div class="left-content">
      <button v-for="(item, index) in lists" :key="index" class="list-item">{{ item.name }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcLeft',
  data(){
    return {
      lists: []
    }
  },

  async mounted(){
    this.lists = await this.getMenu()
  },
  methods: {
    async getMenu(){
      const result = await this.$api.menu.list()
      return result.data
    }
  }
}
</script>

<style lang="scss" scoped>
  #left-container {
    display: grid;
    grid-area: left-aside;
    .left-content {
      display: grid;
      align-self: start;
      justify-self: end;
      width: 90%;
      border-radius: $br10;
      grid-row-gap: $sp1;
      place-items: center;
      padding-top: $sp2;
      padding-bottom: $sp2;
      box-shadow: $bs;
      .list-item {
        width: 80%;
        height: $h1;
        line-height: $h2;
        border: $bd2;
        border-radius: $br3;
        font-size: $f2;
        text-align: center;
        background: none;
      }

    }
  }
</style>