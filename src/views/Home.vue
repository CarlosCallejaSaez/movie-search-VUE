<template>
  <div>
    <h1 class="app-title">Movie Search VUE</h1>
    <div>
    <label for="demoVideo">If you want to see a demo video click the next button</label>
    </div>
     <router-link to="/video">
     
      <button class="video-button" id="demoVideo">Go to Demo Video</button>
    </router-link>
    <search-form @search="searchMovie"></search-form>
    <movie-details :movie="movie"></movie-details>
    <FooterComponent />

    <div v-if="error" class="app-error-message">{{ error }}</div>

   
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
import MovieDetails from "@/components/MovieDetails.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    SearchForm,
    MovieDetails,
    FooterComponent,
  },
  data() {
    return {
      movieTitle: "",
      movie: null,
      error: null,
    };
  },
  methods: {
    searchMovie(title) {
      if (title.trim() === "") {
        this.error = "Please enter a valid movie ";
        return;
      }

      this.error = null;

      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
        title
      )}`;

      this.$axios
        .get(apiUrl)
        .then((response) => {
          if (response.data.Response === "True") {
            this.movie = response.data;
          } else {
            this.error = "Movie not found";
          }
        })
        .catch((error) => {
          this.error = "Error finding the movie ";
        });
    },
  },
};
</script>

<style scoped>
.video-button {
  margin-top: 20px;
  margin-bottom: 20px;
}

h1{
 color:orange;
  margin-bottom: 20px;;
  display: flex;
  justify-content: center;
}

.app-container {
  
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display:flex;
  flex-direction:column;
  min-height: 100vh;
}

.app-title {
  margin-bottom: 20px;
  font-size: 24px;
}

.app-error-message {
  margin-top: 20px;
  padding: 10px;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}
</style>
