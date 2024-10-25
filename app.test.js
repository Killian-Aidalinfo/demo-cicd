const { responseCalculate, getValue } = require('./index');

const resultNeeded = 2;

test('responseCalculate should increment value to 2', () => {
  responseCalculate();
  expect(getValue()).toBe(resultNeeded); 
});
