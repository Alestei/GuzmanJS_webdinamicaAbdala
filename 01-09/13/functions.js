var app = new Vue({
    el:'#aplicacion',
    data:{
      name : '',
      mail : ''
    },

    computed:{

      returnMail : function(){
        return this.name + '@totalmail.com';
      }
    }
  })