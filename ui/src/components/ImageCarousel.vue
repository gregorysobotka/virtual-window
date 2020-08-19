<template>
  <v-carousel
    :show-arrows="false"
    height="100%"
    :transition="transition"
    :hide-delimiters="true"
    hide-delimiter-background
    :interval="interval"
    cycle
  >
    <v-carousel-item
      v-for="(image, i) in images" 
      :key="i"
      :src="image.urls.full"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {
    images: Array
  },
  computed: {},
  watch: {
    images: function(n) {
      console.log(n);
    }
  },
  data() {
    return {
      transition: 'fade',
      interval: 60000
    };
  }
};
</script>
