var app = new Vue({
    el:'#aplicacion',
    data:{
      start: 0,
      end: 0,
      numeros: []
    },

    methods:{
      numberlist: function(){
        if(this.numeros.length != 0 ){
            this.numeros.splice(0, this.numeros.length)
        }

        for(let x = this.start; x<=this.end; x++){
          this.numeros.push(parseInt(x))
        }
      }
    }
  })