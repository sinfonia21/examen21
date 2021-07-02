const fnValidar01 = () => {
	let xTexto = document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)) {
        alert ("Nombre y apellidos...");
        return false;
    }
    let xNumero = document.getElementById("txtNumero").value;
    if(xNumero=="") {
        alert ("Falta edad...");
        return false;
    }

    return true;

}