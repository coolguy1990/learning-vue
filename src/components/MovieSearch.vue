<template>
  <input type="text"
    class="form-control"
    placeholder="Movie Name"
    v-model="movie"
    autofocus
    @keyup.enter="fetchMovies"
  >
</template>

<script>
  const secretKey = 'b9e7fdb8f44746e3b77b77a2f6c10f8c';

  export default {
    data() {
      return {
        movie: '',
      };
    },

    methods: {
      fetchMovies() {
        this.$http
          .get(`https://api.themoviedb.org/3/search/movie?query=${this.movie}&language=en&&api_key=${secretKey}`)
          .then(function (response) {
            this.$dispatch('MovieReceived', response.data);
          });
      },
    },
  };
</script>
