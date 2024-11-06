function pregunta()
{
// Variable mensaje 
var mensaje;
// para que muestre la pregunta y se pueda escribir
var opcion = prompt("¿Tienes mascota?:", "");
 
// If que analiza si ha introducido o no una respuesta y muestra un mensaje.
if (opcion == null || opcion == "") {
        mensaje ="No has respondido";
        
        } else {
            mensaje = opcion
            }
            alert( mensaje);
}
