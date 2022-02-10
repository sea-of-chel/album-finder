<template>
  <div>
    <div class="albums">
      <!-- hude search field from DOM if array is empy--->
      <div v-if="albumInfo.length === 0">loading...</div>
   
      <!-- show search field in DOM if array is empy--->
      <div v-else>
      <!--binding search field with albumInfo computed function-->
      <input type="text" v-model="search" placeholder="Search album.."/>
      <!-- updating albums on button click with function-->
      <button @click="updateAlbum">Update</button>

      <!-- Looping through album results from the results in albumInfo computed function-->
      <album-item
        v-for="(record, index) in albumInfo"
        :key="index"
        :record="record"
       />
       </div>
    </div>
  </div>
</template>

<script>
import AlbumItem from './AlbumItem'
import { mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  components: {
    AlbumItem
  },

  created() {
      //calling the getAlbum function from Vuex store actions which contains the API request.
      this.$store.dispatch("getAlbum");
  },

  computed: { //invoking a computed propety to leverage reactive component caching
    albumInfo() {
        // returning albumInfo state which is populated with the api data.
        return this.$store.state.albumInfo
    },

    search: { 
      get() {
        return this.$store.state.search //get initial state value ("nevermind").
      },
      set(value) {
        this.$store.commit("SEARCH", value) //set search property with binded input field value, update the store's SEARCH mutation
      }
    }
    
  },

methods: {
    // get the action getAlbum from the store
    ...mapActions(['getAlbum']), 

    updateAlbum () {
      // update vuex store's search state in actions to reflect the binded input 
      this.getAlbum(this.search) 
    }
  },
}

</script>