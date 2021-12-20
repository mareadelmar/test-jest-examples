const cliente = {
	nombre: "Juan",
	balance: 500,
	tipo: "premium",
};

// en el ejemplo de objetos el test era sobre las propiedades, no sobre todo el objeto.
// para eso podríamos convertirlo en string, por ej.
// Pero además jest ofrece algo llamado snapshots: datos que se almacenan en un strings, en una carpeta aparte, sobre la que podemos comparar los datos.

describe("Cliente", () => {
	test("test a todo el objeto", () => {
		expect(cliente).toMatchSnapshot(); // cuando la ejecutemos se creará la carpeta snapshot
	});
});

/*
Si ahora a este objeto cliente de arriba le cambiamos algún valor, la prueba no pasará
y jest nos mostrará las diferencias entre este y el objeto guardado en snapshot.
A menos que ejecutemos el test con la flag -- -u (o sea, npm test -- -u): esto actualizará el snapshot con los nuevos valores.
(Otra opción si los valores del snapshot ya no nos sirven es eliminarlo y que se vuelva a crear; 
mejor nunca ir a modificar el archivo hardcodeando).

*/
