<style scoped>
  .card-block {
    padding: 0em;
  }
  .card-summary {
    padding: 1.25em;
  }
  img {
    width: 185px;
    height: 278px;
    float: right;
  }
  .card-img {
    border-radius: 0px;
  }
</style>

<template>
  <div class="card card-block">
    <img class="card-img" :src=`https://image.tmdb.org/t/p/original${image}` :alt="title">
    <div class="card-summary">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-text">{{ summary }}</p>
      <a href="#" class="btn btn-primary">Check It Out!</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'title',
      'image',
      'summary',
    ],
  };
</script>
