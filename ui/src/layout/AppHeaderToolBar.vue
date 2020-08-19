<template>
  <v-app-bar extension-height="180" :collapse="collapse" absolute dense>
    <v-app-bar-nav-icon @click="collapse = !collapse"></v-app-bar-nav-icon>
    <!-- <v-toolbar-title>WellSeen</v-toolbar-title> -->
    <template v-slot:extension>
      <ControlForm> </ControlForm>
    </template>
  </v-app-bar>
</template>

<script>
import ControlForm from '@/forms/ControlForm';

export default {
  name: 'AppHeader',
  components: {
    ControlForm
  },
  props: {
    msg: String
  },
  data: () => ({
    collapse: true
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
