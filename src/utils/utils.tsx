//convierte un numero en 3 digitos de 1 a 001 o 10 a 010
export const zeroNumber = (number: number)=> number.toString().padStart(3, '0')