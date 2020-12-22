<template>
  <v-app>
    <v-bottom-navigation :value="value" color="teal" grow width=100% height=36px>
      <v-btn to='/'> 
        <span>Inicio</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to='/about'>
        <span>Conócenos</span>

        <v-icon>mdi-help</v-icon>
      </v-btn>

      <v-btn to='/servicios'>
        <span>Servicios</span>

        <v-icon>mdi-cash</v-icon>
      </v-btn>

       <v-btn to='/login'>
        <span>Login</span>

        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-main>
      <router-view />
    </v-main>
    <div>
      <the-footer/>
      </div>
    
  </v-app>
  
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import TheFooter from "./components/TheFooter"

export default {
  name: "App",

  components: {
    HelloWorld,
    TheFooter,
  },

  data: () => ({value: 1 
    //
  }),
};
</script>
<style scoped>
.menu {
  width: 500px;
  height: 100px;
}
</style>
