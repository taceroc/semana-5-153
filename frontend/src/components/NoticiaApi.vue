<template>
  <div class="noticias_card">
    <v-card
      class="mx-auto"
      width="20%"
      v-for="(noticia, index) of noticias"
      v-bind:key="index"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        v-bind:src="noticia.image"
        alt=""
      >
        <v-card-title>{{ noticia.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> </v-card-subtitle>

      <v-card-text class="text--primary p-2 text-justify">
        <div>{{ noticia.description }}</div>

        <div class="text-center">
          <a v-bind:href="noticia.url" target="_blank">Noticia completa</a>
        </div>
      </v-card-text>
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
        "https://gnews.io/api/v4/search?q=example&country=au&token=a8f4357881532af17f0324b5422963d7"
      )
      .then((response) => {
        this.noticias = response.data.articles.slice(1, 5);
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
</style>