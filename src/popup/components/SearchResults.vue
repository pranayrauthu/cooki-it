<template>
  <div class="search-results">
    <p>search results for: {{ searchTerm }}</p>
    <cookie-result 
    v-for="(cookie, i) in cookieResults" 
    :key="i" 
    :cookieData="cookie"
    ></cookie-result>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CookieResult from './CookieResult.vue';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['searchTerm', 'cookieResults']),
  },
  components:{
    CookieResult
  }
};
</script>

<style lang="scss" scoped>
.cookie-result {
  text-align: center;
  cursor: pointer;
  transition: font-size 0.5s ease;

  &:hover{
    font-size: 15px;
  }
}
</style>
