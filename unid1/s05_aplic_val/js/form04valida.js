function fnValidar04()
{
    var xTurno = document.getElementById("1stTurno").value;
    if(xTurno=="")
    {
        alert("Selecciones truno...");
        return false;

    }
    var xResult = document.getElementById("txtResult").value;
    if(xResult=="" || xResult==0)
	{
        alert("revise... Resultado ¿0 o vacio?");
        return false;

    } 

    /// Caso contrario
    return true;
}

function verConteo(turno, mtzAlumnos)
{
    contadorTurno = 0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element =>{
            if(elemt[3]==turno){
                contadorTurno++;
            }

        });
    }
    document.getElementById("txtResult").value = contadorTurno;
	
}