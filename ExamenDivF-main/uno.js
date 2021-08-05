function mostrar()
{
	let seguir;
	let promedio;
	let edad;
	let dosis;
	let vacuna;
	let nombre;
	let sexo;
	let acumuladorChina = 0;
	let acumuladorAmericana = 0;
	let acumuladorRusa = 0;
	let acumuladorMasculino = 0;
	let acumuladorFemenino = 0;
	
	do 
	{
		nombre = prompt("ingrese nombre (entre 3 y 10 caracteres)")

		edad = parseFloat(prompt("Ingrese una edad (mayor de 12): "));
		while (!(edad > 12))
		{
			edad = parseFloat(prompt("ERROR. Ingrese un edad (mayor de 12): "));
		}

		vacuna = prompt("Ingrese vacunacion (“rusa”, “china”, “americana”)");
		while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana")
		{
			vacuna = prompt("ERROR. Ingrese vacunacion (“rusa”, “china”, “americana”)");
		}

		dosis = prompt ("Ingrese dosis (p de primera o s de segunda)");
		while(dosis != "s" && dosis != "p")
		{
			dosis = prompt("ERROR. Ingrese dosis (p de primera o s de segunda)");
		}

		sexo = prompt ("Ingrese sexo (f femenino o m para masculino)")
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR. Ingrese sexo (f femenino o m para masculino)");
		}

		seguir = prompt("¿Desea seguir ingresando datos?").toLowerCase();
		while (seguir != 'si' && seguir != 'no') 
		{
			seguir = prompt("ERROR. ¿Desea seguir ingresando datos?").toLowerCase();
		}

		vacuna = acumuladorAmericana + acumuladorChina + acumuladorRusa;


	} while (seguir == "si");

	document.write("Promedio de edad de los vacunados: " + vacuna);

}
