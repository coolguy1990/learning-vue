<template>
  <div>
    <div class="row" v-for="movie in movies">
      <movie :title="movie.title" :image="movie.image" :summary="movie.summary"></movie>
    </div>
  </div>
</template>

<script>
  const MovieCard = require('./MovieCard.vue');

  export default {
    props: ['movies'],
    components: {
      movie: MovieCard,
    },
  };
</script>
