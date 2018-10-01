<template>
  <div>
    <div class="nav-link-container">
      <router-link to="/edit/ADD" class="link">Add</router-link>
    </div>
    <input
    type="search"
    name="cookie-search-input"
    placeholder="search"
    :value="searchTerm"
    @input="updateSearchTerm($event)"
    ref="searchInput"
    >
    <search-results></search-results>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SearchResults from './../../components/SearchResults.vue';

export default {
  data() {
    return {};
  },
  mounted(){
    this.$refs.searchInput.focus();
  },
  computed: {
  	...mapGetters(['searchTerm'])
  },
  methods: {
    updateSearchTerm: function({target}) {
      this.$store.dispatch('updateSearchTerm', target.value)
    }
  },
  components: {
  	SearchResults
  }
};
</script>

<style lang="scss" scoped>
input[name="cookie-search-input"]{
  border: 1px solid blue;
  width: 100%;
}
.nav-link-container{
  height: 40px;
  margin-top: 10px;
  cursor: pointer;

  .link {
    display: block;
    margin: auto;
    text-align: center;
    cursor: pointer;
    transition: font-size 0.5s ease;

    &:hover {
      font-size: 15px;
    }
  }
}
</style>
