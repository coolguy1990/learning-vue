<style>
    #container {
        margin-top: 75px;
    }
</style>

<template>
    <app-header title="TMDB"></app-header>

    <div class="container" id="container">
        <movie-search></movie-search>

        <hr>
        <div class="row">
            <movie-list :movies="movies"></movie-list>
        </div>
    </div>
</template>


<script>
    const AppHeader = require('./components/AppHeader.vue');
    const MovieSearch = require('./components/MovieSearch.vue');
    const MovieCard = require('./components/MovieCard.vue');
    const MovieList = require('./components/MovieList.vue');

    export default {
      data() {
        return {
          movies: [],
        };
      },
      components: {
        appHeader: AppHeader,
        movieSearch: MovieSearch,
        movieCard: MovieCard,
        movieList: MovieList,
      },

      events: {
        MovieReceived(movieData) {
          /*  eslint max-len: ["error", 180]  */
          /*  eslint arrow-body-style: ["error", "as-needed", { requireReturnForObjectLiteral: true }]  */
          /*  eslint-env es6  */
          const m = movieData.results.map(movie => {
            return {
              summary: movie.overview,
              title: movie.original_title,
              image: movie.poster_path ? movie.poster_path : '',
            };
          });

          this.$set('movies', m);
        },
      },
    };
</script>
