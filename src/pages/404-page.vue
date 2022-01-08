<template lang="html">
  <div class="pageNotFound">
    <h1>404 Page Not Found</h1>
    <router-link class="go-back" to="/" tag="a">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .pageNotFound {
    width: 300px;
    padding-top: 50vh;
    margin: 0 auto;
  }

  .go-back {
    display: block;
    margin-top: 30px;

    text-align: center;
    text-decoration: underline;
    color: black;
  }
</style>
