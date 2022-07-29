export const calculateValues = (number) => {
  let result = [];
  const numberIsNotAnInteger = !Number.isInteger(number);
  if (numberIsNotAnInteger || number === 0) return result;
  for (let x = 1; x <= number; x++) {
    if (x > number / 2) {
      break;
    }

    for (let y = 1; y <= number; y++) {
      if (x ** y === number) {
        result.push({ x, y });
      }

      if (x ** y >= number) {
        break;
      }
    }
  }

  result.push({ x: number, y: 1 });

  return result;
};
