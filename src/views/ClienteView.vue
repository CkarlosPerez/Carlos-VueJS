<template>
  <div>
    <nav>
      <router-link to="/seleccion">Hacer Pedido</router-link> |
      <router-link to="/pedido">Mi Pedido</router-link>
    </nav>
    <Informacion/>
  </div>
</template>

<script>
import Informacion from "../components/Informacion.vue"

export default {
  name: 'ClientView',
  components:{
    Informacion
  }
}
</script>

<style>
  div button{
    margin: 15px;
    width: 200px;
    height: 100px;
    
  }

  .img-sabores{
    width: 124px;
    height: 124px;
  }

  .div-sabores{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    /*grid-template-rows: 250px 310px;*/
  }

  h1{
    background-color: rgb(153, 252, 252);
  }
</style>