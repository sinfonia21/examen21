function fnValidar02()
{
    var xNombre = document.getElementById("txtNombres").value;
    if(xNombre=="")
    {
        alert("Escriba nombre...");
        return false;
    } 
    var xApellido = document.getElementById("txtApellidos").value;
    if(xApellido=="")
    {
        alert("Escriba apellido...");
        return false;
    }
    var xDireccion = document.getElementById("txtDireccion").value;
    if(xDireccion=="")
    {
        alert("Escriba Direccion...");
        return false;
    } 
    var xEdade = document.getElementById("txtEdad").value;
    if(xEdade=="")
    {
        alert("Escriba Edad...");
        return false;
    }  
    var xfecha = document.getElementById("fecNac").value;
    if(xfecha=="")
    {
        alert("Escriba Fecha de nacimiento...");
        return false;
    } 






    var elementoGenero = document.getElementsByName("rdGenero");
    var seleccionado = false;
    for (var i=0; i < elementoGenero.length; i++)
    {
        if(elementoGenero[i].checked)
        {
            seleccionado = true;

        }
    }
    if (!seleccionado){
        alert("Elige GÉNERO");
        return false;
    }



    return true;
 
}