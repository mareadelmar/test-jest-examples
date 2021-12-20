const randomString = require("../cities");

test("probar la funcionalidad", () => {
	// testeamos que la función retorne un valor de tipo string
	expect(typeof randomString()).toBe("string");
});

describe("Probar funcionalidades de la función randomString", () => {
	test("comprobar que no existe una ciudad", () => {
		expect(randomString()).not.toMatch(/Cordoba/);
	});
});
