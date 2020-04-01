const calculate = (calculatorInputs) => {
  const acceptedInputs = calculatorInputs.filter((input) => {
    return input || input === 0 || input === null
  })
  const [a, operator, b] = acceptedInputs

  for (let i = 0; i < acceptedInputs.length; i++) {
    if (operator === '*') {
      return +a * +b
    }

    if (operator === '+') {
      return +a + +b
    }

    if (operator === '-') {
      return +a - +b
    }

    if (operator === '/') {
      return +a / +b
    }
  }

  return NaN
}

module.exports = calculate
