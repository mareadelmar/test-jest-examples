const password = "12345678";

describe("Validar que no esté vacío y tiene ocho caracteres", () => {
	test("El pass debe tener 6 caracteres", () => {
		expect(password).toHaveLength(8);
	});

	test("Password no vacío", () => {
		expect(password).not.toHaveLength(0); // not para condicionar lo contrario
	});
});
