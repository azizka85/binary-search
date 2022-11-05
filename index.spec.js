const { binarySearch, upperBound, lowerBound } = require('./index');

describe('Binary Search test', () => {
  test('Test binarySearch method', () => {
    let a = [1, 23, 7, 98, 34, 54, 2];

    a.sort((a, b) => a - b);

    expect(binarySearch(a, 23)).toEqual(3);
    expect(binarySearch(a, 24)).toEqual(null);
  });

  test('Test upperBound method', () => {
    let a = [1, 23, 23, 23, 7, 98, 34, 54, 2];

    a.sort((a, b) => a - b);

    expect(upperBound(a, 23)).toEqual(6);
    expect(upperBound(a, 24)).toEqual(6);
  });

  test('Test lowerBound method', () => {
    let a = [1, 23, 23, 23, 7, 98, 34, 54, 2];

    a.sort((a, b) => a - b);

    expect(lowerBound(a, 23)).toEqual(3);
    expect(lowerBound(a, 24)).toEqual(6);
  });
});