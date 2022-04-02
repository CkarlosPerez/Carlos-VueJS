<template>
    <div>
        <div class="Sabores">
            <h1>Sabores</h1>
        </div>
        <div class="div-a1">
            <div></div>
            <div class="div-sabores">
                <div v-for="(sabor, index) in $store.state.Sabores" v-bind:key="index">
                    <img class="img-sabores" :src="sabor.imagen" :alt="sabor.nombre">
                    <h2>{{sabor.nombre}}</h2>
                    <span>${{sabor.precio}}.00</span><br>
                    <input type="checkbox" id="cbox1" :value="sabor.nombre">
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sabores'
}
</script>
