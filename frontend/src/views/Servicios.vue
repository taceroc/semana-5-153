<template>
<div class="servicios pt-2 pb-4">
    <div class="serv-card">
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://debmedia.com/blog/wp-content/uploads/2020/04/20-04-D-Genera-una-fila-virtual-y-evita-el-contacto-directo-entre-tus-clientes-en-sucursal-pre.jpg"
      height="200px"
      width="344px"
    ></v-img>

    <v-card-title >
      Aplicativo
    </v-card-title>

    <v-card-subtitle>
      Descripción
    </v-card-subtitle>

    <v-card-actions>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="text-justify">
          Aplicativo donde el cliente puede registrarse con sus datos y seleccionar el área con la que desea comunicarse, se le asigna un turno, este es enviado vía correo electrónico/mensaje de texto/whatsapp/Facebook. Constantemente se le avisará sobre el tiempo de espera. Para que en dado caso de necesitarlo, pueda cancelar el turno. Cuando llegue el momento de la cita, se le enviará de nuevo una comunicación para que acceda a la línea telefónica. De esta forma el cliente podrá realizar otro tipo de actividades mientras espera su turno, sin preocuparse por esto. Este servicio viene con la capacitación al aplicativo incluida.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
  <div class="serv-card">
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://www.soydemac.com/wp-content/uploads/2019/01/Notas_Voz_.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Menú Pregrabado
    </v-card-title>

    <v-card-subtitle>
      Descripción
    </v-card-subtitle>

    <v-card-actions>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="shown = !shown"
      >
        <v-icon>{{ shown ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="shown">
        <v-divider></v-divider>

        <v-card-text class="text-justify">
          Cuando el cliente se comunica con su línea de atención, se reproduce un menú donde se le presentan los diferentes servicios que ofrece su empresa y de manera opcional una grabación que describe brevemente los servicios. El cliente selecciona el servicios sobre el cual desea tener mayor información y la llamada se redirige al área correspondiente. De esta manera no existe una única cola de llamadas, lo que disminuye el tiempo de espera del cliente; además, al redirigir la llamada al personal especializado, la llamada se desarrolla de manera más eficiente y exitosa. Este servicio viene con la capacitación al menú pregrabado incluida.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
  <div class="serv-card">
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://dpersonas.com/wp-content/uploads/2020/01/dpersonas.com-habilidades-blandas-que-son-y-por-que-son-importantes-8-habilidades-blandas.png"
      height="200px"
    ></v-img>

    <v-card-title>
      Capacitacion de Personal
    </v-card-title>

    <v-card-subtitle>
      Descripción
    </v-card-subtitle>

    <v-card-actions>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="showed = !showed"
      >
        <v-icon>{{ showed ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showed">
        <v-divider></v-divider>

        <v-card-text class="text-justify">
          Tener buenos asesores es un factor principal en el éxito de la línea de atención al cliente. Se ofrecen capacitaciones para su personal sobre atención al cliente, trabajo en equipo, trabajo bajo presión, manejo de estrés, manejo de tiempo, habilidades blandas, comunicación efectiva y asertiva y muchas otras más.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</div>
    
</template>
<script>
export default {
    data: () => ({
      show: false,
      shown: false,
      showed: false,
    }),
}
</script>
<style scoped>
    .servicios{
        display: flex;
        
    }
    .serv-card{
        margin-right: 50px;
        margin-left: 50px;
        margin-top: 10px;
        width: 100%;
        height: auto;
    }
</style>