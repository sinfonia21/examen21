const fnValidar10 = () => {
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

    let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia = "";
	let eligiooPreferencia = false;
	for (let i=0; i < elementoPref.length; i++){
		if(elementoPref[i].checked){
			valorElegidoPreferencia = elementoPref[i].value;
			eligioPreferencia = true;
		}
	}

    if(!eligiooPreferencia){
		alert("Elija UNA PREFERENCIA...");
		return false;
	}else{
		alert("Su preferencia elegida es" +valorElegidoPreferencia);
	}

    return true;



}

