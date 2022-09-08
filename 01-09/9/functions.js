var app = new Vue({
    el:'#aplicacion',
    data:{
      p1: 0,
      p2: 0,
      operacion: ' ',
      res: undefined,
    },
    methods:{
      
      operate: function(){
          this.res = undefined;
          if(this.operacion == 'sumar'){
              this.res = parseFloat(this.p1) + parseFloat(this.p2);
          }else{
              this.res = parseFloat(this.p1) - parseFloat(this.p2);
          }
      }
    }
  })