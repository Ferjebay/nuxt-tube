<script setup lang="ts">
  import axios from "axios";

  const loading = ref( true );

  const getVideos = async () => {

    const data = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyBKHMlGEvmGWy0kXyyLi6djkPHZYGuNHjw');
    
    console.log( data );
    loading.value = false;
  }

  getVideos();

</script>
<template>
  <!-- <template v-if="loading">
    <lists-skeleton />
  </template>
  <template v-else>
    <div class="flex justify-center p-5 bg-[#181818]">
      <div class="grid max-w-6xl grid-cols-12 gap-2 gap-y-4">
        <lists-detail-card-list />
      </div>
    </div>
  </template> -->
</template>

