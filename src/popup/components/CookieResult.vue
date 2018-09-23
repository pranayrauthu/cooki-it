<template>
  <div class="cookie-result">
    <router-link to="/edit">{{cookieData.name}} - {{cookieData.domain}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['cookieData'],
  data() {
    return {};
  }
};
</script>
