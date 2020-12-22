<template>
  <div class="about pt-3 pl-3 pr-3">
    <h1 class="titulo-principal">¿Quiénes somos?</h1>
    <v-card class="mx-auto mt-3 mr-2">
      <v-list-item>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-team-2832935-2352713.png" alt="">     
        <div class="descripcion p-2 text-justify my-auto"> 
          <p style="font-size: 18px" class="mr-3">Somos una empresa creada por gente como tú, emprendedores y con ganas de salir adelante. Ofrecemos soluciones a personas, grupos, empresas o instituciones, en temas de asesorías vía call-center.
Contamos con diferentes servicios que se acomodan a las necesidades de nuestros clientes. Comprometidos por mejorar sus procesos de negocios de forma efectiva y sin generar costos adicionales.
Todas nuestras soluciones se basan en las recomendaciones dadas por los mejores call-center del mundo: <a href="https://callminer.com/blog/25-call-center-leaders-share-effective-ways-boost-contact-center-efficiency/">https://callminer.com/blog/25-call-center-leaders-share-effective-ways-boost-contact-center-efficiency/</a>
</p>
</div>
      </v-list-item>
    </v-card>
    <v-card class="mx-auto">
      <v-list-item>
      <div class="container">
        <h2 class="titulo1">Misión</h2>
        <p class="font-italic p-2 text-justify">Lograr que nuestros clientes, con precios accesibles a cualquier tipo de negocio, mejoren su atención al cliente vía call-center; integrando servicios tecnológicos y operativos, estos deben alinearse con los objetivos y necesidades del negocio.</p>
      </div>
      <div class="container">
        <h2 class="titulo1">Visión</h2>
        <p class="font-italic p-2 text-justify">Para el año 2022 consolidarnos como una empresa de servicios de call-center reconocida a nivel nacional, cuyas principales características a destacar sean la calidad del servicio, la correcta integración entre mejoras tecnológicas y operativas y la accesibilidad en sus precios.</p>
      </div>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  
  
};
</script>
<style>
.box{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
}
.titulo-principal{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.descripcion{
  width: 30%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding-left: '0px';
}
.MyV{
  display: flex;
  padding-left: 10px;
  padding-right: 20px;
}
.titulo1{
  text-align: center;
}
