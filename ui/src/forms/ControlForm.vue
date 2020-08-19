<template>
  <v-form ref="form">
    <v-row>
      <v-col cols="12">
        <v-text-field label="Unsplash Collection ID" v-model="collectiondIDModel"/>

        <v-slider
          v-model="refreshRateModel"
          label="Refresh rate"
          max="180"
          min="1"
        />
        <v-btn color="success" class="mr-4" @click="submitForm">
          Save
        </v-btn>
        <!-- <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn> -->
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import store from '@/store';
import { mapState } from 'vuex';

export default {
  name: 'ControlForms',
  components: {},
  store, 
  data: () => ({
    collectiondIDModel: '',
    refreshRateModel: 60
  }),
  methods: {
    submitForm() {
      const collectiondIDModel = this.collectiondIDModel;
      this.$store.commit('update_collectionID', collectiondIDModel);
    }
  },
  watch: {
    collectionID(newVal, oldVal){
      if(newVal !== oldVal){
        this.$set(this, 'collectiondIDModel', newVal);
      }
    }
  },
  computed: { 
    ...mapState({
      collectionID: state => state.collectionID
    }) 
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
