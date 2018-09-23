<template>
  <div>
    <h2>COOK-IT</h2>
  	<router-link to='/edit' class="link">Add</router-link>
    <router-link to='/search' class="link">Edit</router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
  h2{
    text-align: center;
  }
  .link {
    display: block;
    text-align: center;
    cursor: pointer;
    transition: font-size 0.5s ease;
  }
  .link:hover{
    font-size: 15px;
  }
</style>
