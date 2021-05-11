<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="navbar-container">
        <div :class="['nav-boxing', { active: currentRouteName == '/' }]">
          <router-link to="/" custom v-slot="{ navigate }">
            <a @click="navigate" role="link">Home</a>
          </router-link>
        </div>
        <div :class="['nav-boxing', { active: currentRouteName == '/login' }]">
          <router-link to="/login" custom v-slot="{ navigate }">
            <a @click="navigate" role="link">Login</a>
          </router-link>
        </div>
        <div
          :class="['nav-boxing', { active: currentRouteName == '/register' }]"
        >
          <router-link to="/register" custom v-slot="{ navigate }">
            <a @click="navigate" role="link">Register</a>
          </router-link>
        </div>
        <div
          :class="['nav-boxing', { active: currentRouteName == '/dashboard' }]"
        >
          <router-link to="/dashboard" custom v-slot="{ navigate }">
            <a @click="navigate" role="link">Dashboard</a>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    currentRouteName() {
      return this.$route.path;
    },
  }
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-around;
  width: 40%;
}

.nav-boxing {
  padding: 7px;
  border-radius: 2px;
  color: #ffffff;
}
.active {
  background-color: #ffffff;
  color: #000000;
}
</style>