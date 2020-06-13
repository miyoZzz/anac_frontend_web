<template>
  <div id="user-container">
    <div v-if="is_online" class="online">
      <a>{{ userinfo.nickname }}</a>
    </div>
    <div v-else class="offline">
      <button class="jump-login">登录</button>
      <button class="jump-register">注册</button>
      <!-- <router-link to="login" class="jump-login">登录</router-link> -->
      <!-- <span>-</span> -->
      <!-- <router-link to="register" class="jump-register">注册</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcUser',
  data () {
    return {
      is_online: false,
      userinfo: {
        nickname: 'miyoZzz',
        sex: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#user-container {
  display: grid;
  .online {
    place-self: center;
    font-size: $f2;
  }
  .offline {
    display: grid;
    justify-self: start;
    align-self: center;
    grid-column-gap: $sp2;
    grid-template-columns: 1fr 1fr;

    .jump-login {
      height: $h2;
      width: 0.8rem;
      font-size: $f2;
      border: $b1;
      border-radius: $br3;
    }
    .jump-register {
      height: $h2;
      width: 0.8rem;
      font-size: $f2;
      border: $b1;
      border-radius: $br3;
    }
  }
}
</style>
