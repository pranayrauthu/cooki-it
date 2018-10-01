<template>
  <div class="cookie-result">
    <router-link 
    :to="editLink"
    >{{cookieData.name}} - {{cookieData.domain}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['cookieData'],
  computed: {
  	editLink() {
  		return {
        name: 'edit',
        params: {
         type: 'EDIT'
       },
       query: this.cookieData
     }; 
   }
 }
};
</script>
