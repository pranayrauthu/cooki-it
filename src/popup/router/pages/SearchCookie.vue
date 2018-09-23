<template>
  <div>
  	<input type="search" name="cookie-search-input" placeholder="search" :value="searchTerm" @input="updateSearchTerm($event)">
  	<search-results></search-results>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SearchResults from './../../components/SearchResults.vue';

export default {
  data() {
    return {};
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
</style>
