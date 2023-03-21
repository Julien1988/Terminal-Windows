<template>
  <Home />
</template>

<script lang="ts">
import Vue from 'vue'
import Home from '~/components/Home.vue';
import Timer from '~/components/Timer.vue';

export default Vue.extend({
  name: "IndexPage",
  components: { Timer, Home }
})
</script>
