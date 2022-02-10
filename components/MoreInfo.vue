<template>
  <div>

    <div class="content-body">
        <!--search result album-->
        <p><strong>Album:</strong> {{record[0].name}}</p> 
        <!--search result artist-->
        <p><strong>Artist:</strong> {{record[0].artist}}</p>
        <!-- search result lastFM link-->
         <p><a :href="record[0].url" target="_blank">Listen on LastFM</a></p>
         <!-- search result album image-->
         <img :src="record[0].image[3]['#text']" />
         <p></p>
      </div>

     
    </div>
</template>
<script>
export default {
  props: ["record"],

};
</script>
