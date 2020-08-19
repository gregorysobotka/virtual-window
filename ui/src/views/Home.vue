<template>
  <v-app id="inspire">
    <AppHeaderToolBar />
    <v-container class="image-container" background-color="black" fluid>
      <ImageCarousel :images="images" />
      <v-row align="center" justify="center">
        <router-view />
      </v-row>
    </v-container>
    <AppFooter />
  </v-app>
</template>

<style lang="scss">
.image-container {
  padding: 0 !important;
}
</style>

<script>
import AppHeaderToolBar from '@/layout/AppHeaderToolBar';
import AppFooter from '@/layout/AppFooter';
import ImageCarousel from '@/components/ImageCarousel';

export default {
  name: 'Home',
  props: {
    source: String
  },
  components: {
    AppHeaderToolBar,
    AppFooter,
    ImageCarousel
  },
  mounted() {
    // default collectionID for app
    this.$store.commit(`update_collectionID`, '11731596');
  },
  methods: {},
  data: () => ({}),
  computed: {
    images() {
      return this.$store.getters.images;
    }
  }
};
</script>
