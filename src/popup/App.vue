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
</style>
<style lang="scss" scoped>
	.cookie-it {
		width: 400px;
		min-height: 400px;
	}
</style>
