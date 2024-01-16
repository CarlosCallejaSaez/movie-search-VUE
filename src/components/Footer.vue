<template>
  <footer class="app-footer">
    <p>Developed with ❤ by Carlos Calleja</p>
    <div class="social-links">
      <a href="https://github.com/CarlosCallejaSaez" target="_blank" rel="noopener noreferrer">
        <img src="/github-logo.png" alt="GitHub" class="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/carlos-calleja-saez/" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin-logo.png" alt="LinkedIn" class="social-icon" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  
};
</script>

<style scoped>


.app-footer {
  position: fixed;
  width: 100vw;
  bottom: 0;
  padding:10px;
  
  text-align: center;
  
  
  color: black;
  border-radius: 0 0 8px 8px;
}

.social-links {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.social-icon {
  width: 30px;
  height: 30px;
  margin: 0 10px;
}

@keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      10%, 30%, 50%, 70%, 90% {
        transform: translateX(-10px);
      }
      20%, 40%, 60%, 80% {
        transform: translateX(10px);
      }
    }
.social-icon:hover {
  animation: shake 1s infinite
}
</style>
