<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
  
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
