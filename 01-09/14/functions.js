var app = new Vue({
    el:'#aplicacion',
    data:{
      Name: ''
    },

    computed:{

      isNameIncorrect : function(){
        if(this.Name.includes(' ')){
          return 'red';
        }
      }


    }
  })