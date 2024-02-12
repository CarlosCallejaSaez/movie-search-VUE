<template>
  <div class="form-group">
    <label for="movieTitle" style="color:#84b6f4;font-size:75px;font-weight:bold;background-color:rgba(245, 245, 245, 0.8);display:inline">Movie Title</label>
    <div class="input-container" style="display:flex;justify-content:center">
      <input v-model="movieTitle" id="movieTitle" class="form-control"  style="max-width:300px" />
      <button @click="searchMovie" class="search-button">search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: '',
    };
  },
  methods: {
    searchMovie() {
      this.$emit('search', this.movieTitle);
    },
  },
};
</script>

<style scoped>


.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.input-container {
  display: flex;
  padding: 0 50px 0 50px
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #0056b3;
}

</style>
