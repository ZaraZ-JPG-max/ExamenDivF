function mostrar()
{
    let nacion;
    let resultado;
    let edad;
    let cepa;
    let seguir;

    do
    {
        nacion = prompt("Ingrese nacionalidad (argentina o extranjero)");
        while (nacion != "argentina" && nacion != "extranjero")
        {
            nacion = prompt("ERROR. Ingrese nacionalidad (argentina o extranjero)")
        }

        edad = parseFloat(prompt("Ingrese una edad (entre 18 y 65): "));
		while (edad < 18 || edad > 65)
		{
			edad = parseFloat(prompt("ERROR. Ingrese un edad (entre 18 y 65): "));
		}
        
        cepa = prompt("Ingrese cepa (delta, alfa, beta o ninguna)");
        while (cepa != "delta" && cepa != "alfa" && cepa != "beta" && cepa != "ninguna")
        {
            cepa = prompt ("ERROR. Ingrese cepa (delta, alfa, beta o ninguna)")
        }

        seguir = prompt("¿Desea seguir ingresando datos?").toLowerCase();
		while (seguir != 'si' && seguir != 'no') 
		{
			seguir = prompt("ERROR. ¿Desea seguir ingresando datos?").toLowerCase();
		}


    } while(seguir = "si");
}
