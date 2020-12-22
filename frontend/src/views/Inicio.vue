<template>
  <div class="home">

    <v-img style="opacity: 0.65" class='banner black-text align-end' src=https://secureservercdn.net/198.71.233.41/35g.43f.myftpupload.com/wp-content/uploads/2015/10/cropped-AllCallsBanner.png alt="">
       
       <h1 class="text-right mr-2 my-auto" style="font-size: 100px">
          Soluciones 153 Call-Center</h1>
    </v-img>

    <noticia-api/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NoticiaApi from '../components/NoticiaApi.vue'

export default {
  name: 'Inicio',
  components: {
    HelloWorld,
    NoticiaApi
  }
}
</script>
<style scoped>
  .banner{
    width: 100%;
    height: auto;
  }

</style>