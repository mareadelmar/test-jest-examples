function suma(a, b) {
	return a + b;
}

function resta(a, b) {
	return a - b;
}

const reverseString = str => str.split("").reverse().join("");

test("Probar callback para dar vuelta string", () => {
	reverseString("Hola", str => {
		expect(str).toBe("aloH");
	});
});

describe("Funciones de suma y resta", () => {
	test("Suma de 20 y 30", () => {
		expect(suma(20, 30)).toBe(50);
	});

	test("Resta de 10 y 5", () => {
		expect(resta(10, 5)).toBe(5);
	});

	// probamos valores mal implementados: si pasa esto (más los anteriores), ya podemos saber que esa función no dará problemas

	test("Probar el valor mal implementado en suma", () => {
		expect(suma(10, 10)).not.toBe(10);
	});

	test("Probar el valor mal implementado en resta", () => {
		expect(resta(10, 5)).not.toBe(10);
	});
});
