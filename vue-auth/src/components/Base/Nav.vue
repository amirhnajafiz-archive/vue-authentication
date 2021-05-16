<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="navbar-container">
        <div :class="['nav-boxing', { active: currentRouteName == '/' }]">
          <router-link to="/" custom v-slot="{ navigate }">
            <a @click="navigate" role="link">Home</a>
          </router-link>
        </div>
        <div
          v-if="this.$store.getters.isLoggedin"
          :class="['nav-boxing', { active: currentRouteName == '/login' }]"
        >
          <router-link to="/login" custom v-slot="{ navigate }">
            <a @click="navigate" role="link">Login</a>
          </router-link>
        </div>
        <div
          v-if="this.$store.getters.isLoggedin"
          :class="['nav-boxing', { active: currentRouteName == '/register' }]"
        >
          <router-link to="/register" custom v-slot="{ navigate }">
            <a @click="navigate" role="link">Register</a>
          </router-link>
        </div>
        <div
          v-if="!this.$store.getters.isLoggedin && !admin_in"
          :class="['nav-boxing', { active: currentRouteName == '/dashboard' }]"
        >
          <router-link to="/dashboard" custom v-slot="{ navigate }">
            <a @click="navigate" role="link">Dashboard</a>
          </router-link>
        </div>
        <div
          v-if="!this.$store.getters.isLoggedin && admin_in"
          :class="['nav-boxing', { active: currentRouteName == '/admin' }]"
        >
          <router-link to="/admin" custom v-slot="{ navigate }">
            <a @click="navigate" role="link">Admin Panel</a>
          </router-link>
        </div>
        <div v-if="!this.$store.getters.isLoggedin">
          <button @click="logUserOut" type="button" class="btn btn-danger">
            Log out
          </button>
        </div>
        <div v-if="admin_in" class="nav-boxing">
          <span>Welcome Admin</span>
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
  },
  methods: {
    logUserOut() {
      this.$store.commit("REMOVE_USER");
      console.log("User logged out");
      this.$router.push("/login");
    },
    admin_in() {
      return this.$store.getters.getAdminStatus == 1;
    },
  },
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