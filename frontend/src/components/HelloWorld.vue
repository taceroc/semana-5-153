<template>

  <v-container>
        <template v-if="!this.$store.state.user">
          <router-link style="text-decoration: none" :to="{name: 'Login'}" class="mr-5 ml-5" exact> 
            <v-btn color="red" target="_blank"> Login </v-btn> 
            </router-link>
          </template>

           <template v-else-if="this.$store.state.user.rol == 'Administrador' || this.$store.state.user.rol == 'Vendedor' || this.$store.state.user.rol == 'Almacenero'">

            <router-link style="text-decoration: none" :to="{name: 'Autenticado'}" class="mr-5 ml-5" exact> 
              <v-btn color="red" target="_blank"> Login </v-btn>
              </router-link>
          </template>

            <template v-else>

            <router-link style="text-decoration: none" :to="{name: 'Inicio'}" class="mr-5 ml-5" exact> 
              <v-btn color="red" target="_blank"> Login </v-btn>
              </router-link>
          </template>

            <template v-if="this.$store.state.user">
         
            <v-btn icon class="mr-5" @click="salir()"> 
                <span>Salir</span> </v-btn> 
          </template>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods:{
      salir(){
        this.$store.dispatch('salir');
      }
    },
  }
</script>
