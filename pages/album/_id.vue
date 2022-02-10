<template>
    <div>
        <!-- Looping through album results from the results in albumInfo computed function-->
         <more-info
            v-for="(record, index) in albumInfo"
            :key="index"
            :record="record"
        />

       <button><nuxt-link to="/">Back to search</nuxt-link></button>
    </div>
</template>
<script>
import MoreInfo from '../../components/MoreInfo'

export default {
     components: {
    MoreInfo
  },
    created() {
        //calling the getAlbum function from Vuex store actions which contains the API request.
        this.$store.dispatch("getAlbum");
    },
    computed: {  //invoking a computed propety to leverage reactive component caching
        albumInfo() {
            // returning albumInfo state which is populated with the api data.
            return this.$store.state.albumInfo;
        }
    },

}
</script>
<style lang="scss" scoped>

</style>

