const cliente = {
	nombre: "Juan",
	balance: 500,
};

//ej. verificar porque si tiene más de 400 en balance es un cliente premium.
describe("Clientes", () => {
	test("Categoría del cliente", () => {
		expect(cliente.balance).toBeGreaterThan(400);
	});

	test("Es juan?", () => {
		expect(cliente.nombre).toBe("Juan");
	});

	// a veces se comprueba también que algo no tenga un valor (*)
	test("No es otro cliente", () => {
		expect(cliente.nombre).not.toBe("Pedro");
	});
});

/*
Esto de revisar por un valor y para que no sea un valor es útil para revisar falsos positivos.
Casos en los que solo probando el software sea evidente que hay un vacío en la comprobación de datos.

*/
