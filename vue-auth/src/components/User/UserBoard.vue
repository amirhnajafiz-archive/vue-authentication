<template>
  <div class="hello">
    <h1>Welcome to regular users page</h1>
    <h2>{{ msg }}</h2>
    <p>{{ username }}</p>
    <p>{{ email }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "The commoners",
      username: undefined,
      email: undefined,
    };
  },
  mounted() {
    this.username = this.$store.getters.getUserName;
    this.email = this.$store.getters.getUserEmail;
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>