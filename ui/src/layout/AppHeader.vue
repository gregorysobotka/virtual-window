<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <AppSidebar />
    </v-navigation-drawer>

    <v-app-bar app color="deep-gray" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>WorldView</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>
          About
        </v-btn>
        <v-divider vertical></v-divider>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import AppSidebar from '@/layout/AppSidebar';

export default {
  name: 'AppHeader',
  components: {
    AppSidebar
  },
  props: {
    msg: String
  },
  data: () => ({
    drawer: false
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
