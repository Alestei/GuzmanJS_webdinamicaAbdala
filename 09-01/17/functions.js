

var app = new Vue({
    el:'#aplicacion',
    data:{
      
    },

    beforeCreate : function(){
      console.log("Before Create")
    },

    create : function(){
      console.log("Create")
    },

    beforeMount : function(){
      console.log("Before Mount")
    },

    mounted : function(){
      console.log("Mounted")
    },
  })



  