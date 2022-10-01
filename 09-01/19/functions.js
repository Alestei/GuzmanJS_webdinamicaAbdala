Vue.component('hola-mundo', {
  props: ['idioma'],
  template: `<div>
                <p v-if="idioma=='castellano'">Hola mundo</p>
                <p v-if="idioma=='ingles'">Hello world</p>
            </div>`
})


var app = new Vue({
    el:'#aplicacion',
    data:{
      lang : ' '
    },



  })