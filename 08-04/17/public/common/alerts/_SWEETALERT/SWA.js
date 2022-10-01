


function sAlert(tituloAlerta, contenidoAlerta, tipoAlerta, pieAlerta){
     
 Swal.fire({
   titleText: tituloAlerta,
   text: contenidoAlerta,
   icon: tipoAlerta ? tipoAlerta : "",
   imageUrl: 'https://i.pinimg.com/474x/40/d8/0d/40d80dd33c14069f55e363d366d0129e.jpg',
   imageWidth: 150,
   imageHeight: 150,
   confirmButtonColor: "#3085d6",
   footer: "<small>"+pieAlerta,
    
}).then((result) => {
    if (result.isConfirmed) {    
    	window.location.reload();
    } 
});

}


function sAlert2(tituloAlerta, contenidoAlerta, tipoAlerta, pieAlerta){
     
  Swal.fire({
    titleText: tituloAlerta,
    text: contenidoAlerta,
    icon: tipoAlerta ? tipoAlerta : "",
    confirmButtonColor: "#3085d6",
    footer: "<small>"+pieAlerta,
     
 });
 
 }

