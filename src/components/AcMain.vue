<template>
  <div id="main-container">
    <div class="main-content">
      <div class="list-item">
        <h1>建议收藏！2020 年必备的几个 DevOps 工具，我相信很多人一定不会陌生。作为一个热</h1>
        <article>提到 DevOps 这个词，我相信很多人一定不会陌生。作为一个热门的概念，DevOps近 年来频频出现在各大技术社区和媒体的文章中。到了 2020 年，DevOps 的革命也终于成为了一个主流，DevOps 相关工具的受欢迎程度也在激增。根据 Google 趋势，「DevOps 工具」的搜索量一直在稳定增长，并且这种趋势还在持续。
          DevOps 工具越来越多，了解它们以及知道在什么时候使用他们越来越重要。由于 DevOps 涵盖了整个软件开发生命周期，因此有很多工具可供选择。让我们将其大致分为以下几类：
          DevOps 工具越来越多，了解它们以及知道在什么时候使用他们越来越重要。由于 DevOps 涵盖了整个软件开发生命周期，因此有很多工具可供选择。让我们将其大致分为以下几类：
        </article>
        <span class="t1">点赞 x12</span>
        <span class="t2">miyoZzz</span>
        <span class="t3">6月13日</span>
      </div>
      <div class="list-item"></div>
      <div class="list-item"></div>
      <div class="list-item"></div>
    </div>
      <!-- <div class="main-content"> -->
        <!-- <component :is="is_component"></component> -->
        <!-- {{ is_component }} -->
      <!-- </div> -->
  </div>
</template>

<script>
// import ArticleList from '../components/article/List'
// import ArticleAdd from '../components/article/Add'
export default {
  name: 'AcMain',
  components: {
    // ArticleList,
    // ArticleAdd
  },
  data(){
    return {
      // is_component: "article-list"
    }
  },
  // computed: {     
  //   is_component: function(){
  //     // return this.$store.state.component
  //   }
  // }
}
</script>

<style lang="scss" scoped>
#main-container {
  display: grid;
  border-radius: $br5;
  box-shadow: $bs;
  padding-top: $sp2;
  .main-content {
    display: grid;
    justify-self: center;
    align-self: start;
    grid-row-gap: $sp_5;
    width: 96%;
    // border: $b1;
    .list-item {
      display: grid;
      grid-template-rows: 1fr 2fr 1fr;
      grid-template-columns: 1.5fr 1.5fr 1fr;
      grid-template-areas: "h1 h1 h1"
                           "article article article"
                           "t1 t2 t3";
      height: $h3;
      border: $bd2;
      border-radius: $br5;
      padding-left: $sp_5;
      h1 {
        align-self: center;
        grid-area: h1;
        font-size: $f3;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      article {
        align-self: center;
        grid-area: article;
        font-size: $f2;
        color: gray;
        // 多余内容省略
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .t1,.t2,.t3 {
        align-self: center;
        font-size: $f1;
        color: gray;
      }
      .t1{
        grid-area: t1;
      }
      .t2{
        grid-area: t2;
      }
      .t3{
        grid-area: t3;
      }
    }
  }
  // grid-area: main;
  // height: 12.13rem;
  // border: 1px solid red;
  // .main-content {
  //   place-self: center;
  //   height: 6rem;
  //   // border: 1px solid red;
  //   background: black;
  // }
}
</style>