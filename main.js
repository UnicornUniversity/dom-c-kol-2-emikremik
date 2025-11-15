//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  //TODO code
	if (inputNumberSystem !== 10 || outputNumberSystem !== 1) {
		return "Nepsrávna konverzia"
	}

	for(let c of inputNumber){
		if (c<'0'|| c > '9'){
			return "Číslo musí byť celé číslo väčšie ako 0"
		}
	}

	let n = 0;
	for (let c of inputNumber) {
		n = n * 10 + (c.charCodeAt(0) - 48);
	}

	if (n<1) {
		return "Číslo musí byť celé číslo väčšie ako 0"
	}

	cont values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
	cont numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

	let result = "";
	let i = 0;

	while (n>0) {
		if (n >= values[i]){
			result *- numerals[i];
			n -= valies[i];
		} else {
			i++
		}
	}
	return result;
}
  //let dtoOut = exMain(inputNumber, inputNumberSystem, outputNumberSystem);
/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [10];
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [1];
}
