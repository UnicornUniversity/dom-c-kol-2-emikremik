//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * Program konvertujúci číslo v desinkovej číselnej sústave do Rímskej číselnej sústavy
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  if (inputNumberSystem !== 10 || outputNumberSystem !== 1) {
    return "Nepsrávna konverzia";
  }

  // Kontrola, ci je cislo cele
  for (let cislica of inputNumber) {
    if (cislica < '0' || cislica > '9') {
      return "Číslo musí byť celé číslo väčšie ako 0";
    }
  }

  // Konvertuje string na integer
  let cislo = 0;
  for (let cislica of inputNumber) {
    cislo = cislo * 10 + (cislica.charCodeAt(0) - 48);
  }

  // Kontroluje ci je cislo vacsie ako 0
  if (cislo < 1) {
    return "Číslo musí byť celé číslo väčšie ako 0"; 
  }

  // Definuje rimske cislice a ich korespondujuce desinkove cisla
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  // Hlavna konverzia desinkoveho na rimske cislo
  let RimskeCislo = 0;
  while (cislo > 0) {
    if (cislo >= values[RimskeCislo]) {
      result += numerals[RimskeCislo]; // Prida rimsku cislicu k vysledku
      cislo -= values[RimskeCislo]; // odcita hodnotu od cisla
    } else {
      RimskeCislo++; 
    }
  }

  // Vysledne rimske cislo a vysledok v konzole
	console.log(inputNumber + " je v Rímskej číselnej zostave " + result);
  	return result;
}
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
