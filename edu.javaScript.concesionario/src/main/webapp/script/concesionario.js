/**
 * 
 */

/**
 * Clase Vehiculo / Clase Padre
 */
class Vehiculo {
	// Constructor
	constructor(marca, modelo, cilindrada) {
		this._marca = marca;
		this._modelo = modelo;
		this._cilindrada = cilindrada;
	}
	// Getter
	get marca() {
		return this._marca;
	}
	get modelo() {
		return this._modelo;
	}
	get cilindrada() {
		return this._cilindrada;
	}
	// Setter
	set marca(marca) {
		this._marca = marca;
	}
	set modelo(modelo) {
		this._modelo = modelo;
	}
	set cilindrada(cilindrada) {
		this._cilindrada = cilindrada;
	}
}

/**
 * Subclases
 */
class Coche extends Vehiculo{
	// Constructor
	constructor(marca, modelo, cilindrada, numPuertas, numOcupantes) {
		super(marca, modelo, cilindrada);
		this._numPuertas = numPuertas;
		this.numOcupantes = numOcupantes;
	}
	// Getter
	get numPuertas() {
		return this._numPuertas;
	}
	// Setter
	set numPuertas(numPuertas) {
		this._numPuertas = numPuertas;
	}
}

class Moto extends Vehiculo{
	// Constructor
	constructor(marca, modelo, cilindrada, anyoDisenyo, carnet) {
		super(marca, modelo, cilindrada);
		this._anyoDisenyo = anyoDisenyo;
		this.carnet = carnet;
	}
	// Getter
	get anyoDisenyo() {
		return this._anyoDisenyo;
	}
	// Setter
	set anyoDisenyo(anyoDisenyo) {
		this._anyoDisenyo = anyoDisenyo;
	}

}


// Instanciamos la clase coche y moto
let coche1 = new Coche("Seat", "Ibiza", 3, 4, 5);
let moto1 = new Moto("BMW", "X3", 4, 2014, "B1");

// Accedemos a los valores
console.log("Coche: ");
console.log(coche1.marca);
console.log(coche1.modelo);
console.log(coche1.cilindrada);
console.log(coche1.numPuertas);
console.log(coche1.numOcupantes);

console.log("Moto: ");
console.log(moto1.marca);
console.log(moto1.modelo);
console.log(moto1.cilindrada);
console.log(moto1.anyoDisenyo);
console.log(moto1.carnet);

// Modificamos
coche1.marca = "Audi";
coche1.numPuertas = 5;
coche1.numOcupantes = 2;

console.log("Coche Modificado: ");
console.log(coche1.marca);
console.log(coche1.modelo);
console.log(coche1.cilindrada);
console.log(coche1.numPuertas);
console.log(coche1.numOcupantes);

moto1.marca = "Yamaha";
moto1.anyoDisenyo = 2019;
moto1.carnet = "C1";

console.log("Moto Modificado: ");
console.log(moto1.marca);
console.log(moto1.modelo);
console.log(moto1.cilindrada);
console.log(moto1.anyoDisenyo);
console.log(moto1.carnet);
