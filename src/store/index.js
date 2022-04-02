import { createStore } from 'vuex'

export default createStore({
  state: {
    Sabores: [
      {
        nombre:'Pastel Arcoiris',
        imagen:require('@/assets/img/pastel-arcoiris.jpg'),
        cantidad:20,
        precio:'200'
      },
      {
        nombre:'Pastel de chocolate',
        imagen:require('@/assets/img/pastel-de-chocolate.jpg'),
        cantidad:15,
        precio:'300'
      },
      {
        nombre:'Pastel doble chocolate',
        imagen:require('@/assets/img/pastel-de-doble-chocolate.jpg'),
        cantidad:'18',
        precio:'350'
      },
      {
        nombre:'Pastel de durazno',
        imagen:require('@/assets/img/pastel-de-durazno.jpg'),
        cantidad:20,
        precio:'180'
      },
      {
        nombre:'Pastel de fresa',
        imagen:require('@/assets/img/pastel-de-fresa.jpg'),
        cantidad:20,
        precio:'220'
      },
      {
        nombre:'Pastel de moka',
        imagen:require('@/assets/img/pastel-de-moka.jpg'),
        cantidad:10,
        precio:'200'
      },
      {
        nombre:'Pastel de tiramisu',
        imagen:require('@/assets/img/pastel-de-tiramisu.jpg'),
        cantidad:10,
        precio:'250'
      },
      {
        nombre:'Pastel de helado de oreo',
        imagen:require('@/assets/img/pastel-helado-de-oreo.jpg'),
        cantidad:5,
        precio:'380'
      },
      {
        nombre:'Pastel tres leches',
        imagen:require('@/assets/img/pastel-tres-leches_chocolate-blanco.jpg'),
        cantidad:25,
        precio:'290'
      },
      {
        nombre:'Pastel tres leches cajeta',
        imagen: require('@/assets/img/pastel-tres-lechescajeta.jpg'),
        cantidad:30,
        precio:'280'
      },
      {
        nombre:'Red velvet',
        imagen:require('@/assets/img/red-velvet.jpg'),
        cantidad:35,
        precio:'380'
      }
    ],
    Adornos: [
      {
        nombre:'Paquete fiesta',
        imagen:require('@/assets/img/paquete-fiesta-empaque-416x416.jpg'),
        cantidad:'150',
        precio:'35',
      },
      {
        nombre:'Vela Mensaje',
        imagen:require('@/assets/img/vela-mensaje-pillin-416x416.jpg'),
        cantidad:'80',
        precio:'18',
      },
      {
        nombre:'Bengala',
        imagen:require('@/assets/img/velas-bengala-416x416.jpg'),
        cantidad:'230',
        precio:'38',
      },
      {
        nombre:'Vela letra',
        imagen:require('@/assets/img/velas-letras-416x416.jpg'),
        cantidad:'260',
        precio:'15',
      },
      {
        nombre:'Velas Magicas',
        imagen:require('@/assets/img/velas-magicas-416x416.jpg'),
        cantidad:'110',
        precio:'20',
      },
      {
        nombre:'Vela número',
        imagen:require('@/assets/img/velas-numero-416x416.jpg'),
        cantidad:'100',
        precio:'12',
      }
    ],
    Cliente:{
      Nombre:'',
      Telefono:'',
      Correo:'',
      Pedido: {
        SaboresSeleccionados:[],
        AdornosSeleccionados:[]
      }
    }
  },
  getters: {
    getSabor(state, sabor){
      let obj = state.Sabores.find(o => o.nombre === sabor);
      console.log(sabor);
      console.log(obj);
    },
    getAdorno(state, adorno){
      let obj = state.Adornos.find(o => o.nombre === adorno);
      console.log(adorno);
      console.log(obj);
    }
  },
  mutations: {
    quitarSabor(state, sabor){
      state.Sabores.find(o => o.nombre === sabor).cantidad--;
      let obj = state.Sabores.find(o => o.nombre === sabor)
      console.log(sabor);
      console.log(obj);
    },
    quitarAdorno(state, adorno){
      state.Adornos.find(o => o.nombre === adorno).cantidad--;
      let obj = state.Adornos.find(o => o.nombre === adorno)
      console.log(adorno);
      console.log(obj);
    }
  },
  actions: {
  },
  modules: {
  }
})
