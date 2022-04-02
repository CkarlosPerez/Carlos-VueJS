<template>
  <div>
    <div class="adornos">
        <h1>Adornos</h1>
    </div>
    <div class="div-a1">
      <div></div>
      <div class="div-adornos">
        <div v-for="(adorno, index) in $store.state.Adornos" v-bind:key="index">
            <img class="img-sabores" :src="adorno.imagen" :alt="adorno.nombre">
            <h2>{{adorno.nombre}}</h2>
            <span>${{adorno.precio}}.00</span><br>
            <input type="checkbox" id="cbox1" :value="adorno.nombre">
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Adornos'
}
</script>