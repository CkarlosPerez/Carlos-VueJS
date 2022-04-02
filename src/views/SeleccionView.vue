<template>
  <div>
    <router-link to="/cliente">Regresar</router-link> |
    <router-link to="/pedido">Siguiente</router-link> 
    <PreferenciaAdorno/>
    <PreferenciaSabor/>

  </div>
</template>

<script>
import PreferenciaAdorno from "../components/PreferenciaAdorno.vue"
import PreferenciaSabor from "../components/PreferenciaSabor.vue"

export default {
    name: 'SeleccionView',
    components:{
        PreferenciaAdorno,
        PreferenciaSabor
    }
}
</script>

<style>
  .img-adornos{
    width: 324px;
    height: 324px;
  }

  .div-a1{
    display: grid;
    grid-template-columns: 10% 80% 10%;
  }

  .div-adornos{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    /*grid-template-rows: 250px 310px;*/
  }

  .div-sabores{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    /*grid-template-rows: 250px 310px;*/
  }

  h1{
    background-color: rgb(153, 252, 252);
  }
</style>