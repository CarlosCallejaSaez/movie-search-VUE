<template>
  <div v-if="movie" class="movie-details-container">
    <h2 class="mb-3">{{ movie.Title }}</h2>
    <div class="movie-content">
      <div class="movie-poster">
        <img :src="movie.Poster" alt="Poster" class="img-fluid rounded mb-4" />
      </div>
      <div class="movie-info">
        <p class="mb-2"><strong>Year:</strong> {{ movie.Year }}</p>
        <p class="mb-2"><strong>Director:</strong> {{ movie.Director }}</p>
        <p class="mb-2"><strong>Genre:</strong> {{ movie.Genre }}</p>
        <p class="mb-2"><strong>Rating:</strong> {{ movie.imdbRating }}</p>
        <p class="mb-2"><strong>Description:</strong> {{ movie.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
};
</script>

<style scoped>

.movie-details-container {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgba(252, 252, 252, 0.9);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom:100px;
}

.movie-content {
  display: flex;
  align-items: center;
}

.movie-poster img {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover; 
  border-radius: 4px;
}

.movie-info {
  flex: 1;
  padding-left: 20px;
}

.movie-info p {
  font-size: 16px;
}

.movie-details h2 {
  color: #007bff; 
}
</style>
