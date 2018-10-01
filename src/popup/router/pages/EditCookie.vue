<template>
  <div>
    <div class="nav-link-container">
      <router-link to="/"><div class="go-back-link"></div></router-link>
    </div>
    <div class="cookie-name-container">
      <label for="cookie-name">name:</label>
      <input type="text" name="cookie-name" :value="editCookieForm.name">
    </div>
    <div>
      <label for="cookie-value">value:</label>
      <textarea name="cookie-value" :value="editCookieForm.value"></textarea>
    </div>
    <div>
      <label for="cookie-domain">domain:</label>
      <input type="text" name="cookie-domain" :value="editCookieForm.domain">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      editCookieForm: {
        name: '',
        value: '',
        domain: ''
      }
    };
  },
  mounted() {
    this.initializeForm();
  },
  methods: {
    initializeForm() {
      if(this.$route.params.type === "ADD"){
        this.editCookieForm = {
          name: '',
          value: '',
          domain: ''
        };
        return;
      }
      if(this.$route.params.type === "EDIT"){
        this.editCookieForm = {
          ...this.$route.query
        };
        return;
      }
      throw `Invalid param: ${ this.$route.params.type }`;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-link-container{
  height: 40px;
  margin-top: 10px;
  cursor: pointer;

  .go-back-link {
    color: #000;
    position: absolute;
    margin-left: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 18px;
    height: 1px;
    background-color: currentColor;

    &:before {
      content: '';
      position: absolute;
      left: 1px;
      top: -5px;
      width: 10px;
      height: 10px;
      border-top: solid 1px currentColor;
      border-right: solid 1px currentColor;
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
}
</style>
