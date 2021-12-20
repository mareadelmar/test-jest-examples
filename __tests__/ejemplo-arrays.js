const carrito = ["producto1", "producto2", "producto3"];

// básicamente lo  mismo que los strings

describe("Carrito de compras", () => {
	test("Debe tener al menos un elemento", () => {
		expect(carrito).not.toHaveLength(0);
	});

	test("Debe tener tres elementos", () => {
		expect(carrito).toHaveLength(3);
	});
});
