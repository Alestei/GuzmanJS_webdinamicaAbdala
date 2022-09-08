var app = new Vue({
    el:'#aplicacion',
    data:{
      PJSON : []
    },

    methods:{
      recuperarPost: function () {
        this.$http.get('http://scratchya.com.ar/vue/datos.php').then(function (respuesta) {
               this.PJSON=respuesta.body   
                      
        })
      }
    }
  })