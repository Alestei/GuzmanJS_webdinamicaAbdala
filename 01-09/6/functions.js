var app = new Vue({
    el:'#aplicacion',
    data:{
       p1: 0,
       p2: 0,
       rto: 0
    },

    methods: {

      sumar: function(){
       
        this.rto = parseFloat(this.p1) + parseFloat(this.p2);
      }

      
    }

  })