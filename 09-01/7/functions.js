var app = new Vue({
  el:'#aplicacion',
  data:{
    phrase: '',
    letterA : 0
  },

  methods: {

    process: function(){
        if(this.letterA != 0){this.letterA = 0}
        for(let x in this.phrase){
          
          if(this.phrase[x] == 'a' || this.phrase[x] == 'A'){
             // alert(this.phrase)
              this.letterA+=1;
          }
        }
        
    }

    
  }

})