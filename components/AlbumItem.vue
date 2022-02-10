<template>
  <div>

    <div>

     <!-- I have set a parameter of the album name to the url, 
      which will in turn get sent as a payload pulling only that album object from the api inside /pages/album/_id-->
         <p><nuxt-link :to="`/album/${record[0].artist}`"> {{ record[0].artist }}</nuxt-link></p>

        <!-- commented out for project simplicity (pull 10 items from array) using an index in a range and then accessing the array via its index to return 10 results with same album names -->
         <!-- <p><nuxt-link :to="`/album/${record[index].artist}`"> {{ record[index].artist }}</nuxt-link></p> -->
      </div>

     
    </div>
</template>
<script>
export default {
  props: ["record"],


//commented out for project simplicity (pull 10 album from array)
//   data() {
//       return{
//           item: this.record.length
//       }
//   },
};
</script>
