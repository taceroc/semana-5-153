<template>
  <div class="noticias_card">
    <v-card
      class="mx-auto"
      width="28%"
      v-for="(noticia, index) of noticias"
      v-bind:key="index"
    >
      <v-img
        class="black--text align-end"
        height="200px"
        v-bind:src="noticia.image"
        alt=""
      >
      </v-img>
        <v-card-title class="mb-2 text-left" style="font-size: 22px !important">{{ noticia.title }}</v-card-title>

      <v-card-subtitle class="pb-0"> </v-card-subtitle>

      <v-card-text class="text--primary p-2 text-justify mb-5">
        <div>{{ noticia.description }}</div>

      </v-card-text>



        <div class="align-self-end">
          <a class="text-align" v-bind:href="noticia.url" target="_blank">Noticia completa</a>
        </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NoticiaApi",
  data() {
    return {
      noticias: null,
    };
  },
  mounted() {
    axios
      .get(
        "http://api.mediastack.com/v1/news?access_key=02138df3789ab549576448516fc0c194&languages=es&categories=technology&limit=20"
      )
      .then((response) => {
        this.noticias = response.data.data.slice(13,16);
        console.log(this.noticias);
      });
  },
};
</script>
<style scoped>
.noticias_card{
    display: flex;
    margin-bottom: 10px;
}
.align-self-end {
  position:absolute;
  bottom:0;
  left:150px;
  padding-bottom: 4px;
}

.v-application a{
  color: teal !important ;
  background-color: transparent;
  text-decoration: none;
}
</style>