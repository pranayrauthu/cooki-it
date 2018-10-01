<template>
  <div class="cookie-it">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>



<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400');

	html {
		overflow: scroll;
		overflow-x: hidden;
	}
	::-webkit-scrollbar {
		width: 0px;  /* remove scrollbar space */
		background: transparent;  /* optional: just make scrollbar invisible */
	}
	/* optional: show position indicator in red */
	::-webkit-scrollbar-thumb {
		background: #FF0000;
	}
	* {
		font-family: 'Open Sans', sans-serif;
	}
</style>
<style lang="scss" scoped>
	.cookie-it {
		width: 400px;
		min-height: 400px;
	}
</style>
