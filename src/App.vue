<template>
  <div class="container">
    <header class="header">
      <div class="logo" @click="$router.push('/')" style="cursor: pointer">
        <h1>СБР</h1>
        <p>Сервис бронирования ресурсов</p>
      </div>
      <div class="auth-buttons">
        <button class="btn-link" @click="$router.push('/')">Вход</button>
        <button class="btn-link" @click="$router.push('/')">Регистрация</button>
      </div>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  overflow: hidden;
}

.header {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo h1 {
  font-size: 28px;
  margin-bottom: 5px;
}

.logo p {
  font-size: 12px;
  opacity: 0.9;
}

.auth-buttons {
  display: flex;
  gap: 15px;
}

.btn-link {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-link:hover {
  background: white;
  color: #1e3c72;
}

.main-content {
  padding: 40px;
}

@media (max-width: 600px) {
  .container {
    border-radius: 10px;
  }
  .header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  .main-content {
    padding: 20px;
  }
}
</style>