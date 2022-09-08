var app = new Vue({
    el:'#aplicacion',
    data:{ 
      lenguajes: [
        {
          nombre: 'C',
          tachado:false
        },
        {
          nombre: 'Java',
          tachado:false
        },
        {
          nombre: 'PHP',
          tachado:false
        },
        {
          nombre: 'Python',
          tachado:false
        },
        {
          nombre: 'Ruby',
          tachado:false
        },
        {
          nombre: 'Kotlin',
          tachado:false
        },
        {
          nombre: 'C#',
          tachado:false
        }]        
    },

    methods:{

         tachar : function(lenguaje){
            lenguaje.tachado = true;
        }
    }
  })