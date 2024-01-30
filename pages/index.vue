<script setup lang="ts">
  import axios from "axios";

  const loading = ref( true );
  const items = ref([]);
  const store = useAuthStore();

  const getVideos = async () => {

    await new Promise(resolve => setTimeout(resolve, 1000));

    if ( store.videos.length == 0 ) {
      const { data } = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyAT_zkg_05bcxB_OnCYnjzNVF4PClBLWKk');

      items.value = data.items;
      store.videos = items.value;
    }else{
      items.value = store.videos;
    }
    
    loading.value = false;
  }

  getVideos();    

</script>
<template>
  <template v-if="loading">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 mt-4">
      <lists-skeleton />
    </div>
  </template>
  
  <template v-else>

    <div class="flex justify-center p-5 bg-[#181818]">
      <div class="grid max-w-6xl grid-cols-12 gap-2 gap-y-4">
        <div v-for="(item, index) in items" :key="index"
          class="col-span-12 sm:col-span-6 md:col-span-3">
          <lists-detail-card-list  :item="item"/>
        </div>
      </div>
    </div>

  </template>

</template>

