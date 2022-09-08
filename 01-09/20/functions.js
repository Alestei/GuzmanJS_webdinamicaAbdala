Vue.component('articulos', {
  props:['datos'],
  template: `<div>
               <table class="table table-dark" >
               <tr><td>Código</td><td>Descripción</td><td>Precio</td></tr>
               <tr v-for="art in datos"><td>{{art.codigo}}</td><td>{{art.descripcion}}</td><td>{{art.precio}}</td></tr>
               </table>
             </div>`
})


var app = new Vue({
    el:'#aplicacion',
    data: {
      datos: [{
              codigo: 1, 
              descripcion: 'papas',
              precio: 12.52
              },{
              codigo: 2, 
              descripcion: 'naranjas',
              precio: 21
              },{
              codigo: 3, 
              descripcion: 'peras',
              precio: 18.20
              }]  
      }
  })