import { suma2 } from "../js/funciones";

describe("Suma de dos números", () => {
	test("Suma 20 y 10, debe dar 30", () => {
		expect(suma2(10, 20)).toBe(30);
	});
});

/*
No funciona el import porque soporta commonjs. Pero no podemos usar commonjs para todo, así que tendríamos
que hacer una versión igual de la función para los test, pero sería más trabajo.

Otra opción es utilizar Babel: nos permite escribir código nuevo porque luego será transpilado para ser soportado por todo.

*/
