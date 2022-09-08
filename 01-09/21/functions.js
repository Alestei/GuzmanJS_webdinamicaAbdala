Vue.component('boton', {
  template: 
  `
  <button v-on:click="incrementar" v-bind:class="'btn btn-success'">{{bvalue}}</button>
  
  `,

  data: function(){
    return{
    bvalue: 0 
    }
  },

  methods: {
    incrementar : function(){
      this.bvalue+=1;
    }
  }

})


var app = new Vue({
    el:'#aplicacion',

  })