const reverseStringAsync = str => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error("String is required"));
		}
		resolve(str.split("").reverse().join(""));
	});
};

test("Probar una promesa", () => {
	return reverseStringAsync("Hola").then(string =>
		expect(string).toBe("aloH")
	);
});

// ahora con async/awair

test("Probar async/await", async () => {
	const string = await reverseStringAsync("Chau");
	expect(string).toBe("uahC");
});

// indicar código que deba ejecutarse antes o después de una prueba, o antes o después de todas.

afterEach(() => console.log("mensaje después de las prueba de este archivo"));
afterAll(() =>
	console.log("mensaje después de todas las pruebas de este archivo")
);

beforeEach(() =>
	console.log("mensaje antes de ejecutar una prueba de este archivo")
);
beforeAll(() =>
	console.log(
		"mensaje antes de ejecutar todas las pruebas todas las pruebas de este archivo"
	)
);
