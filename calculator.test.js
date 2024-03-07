const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    // arrange and act
    var result = mathOperations.sum(1, 2);
    // assert
    expect(result).toBe(3);
  });
});

describe("Calculator tests", () => {
  test("multiplying 2 * 3 should return 6", () => {
    // Arrange and Act
    var result = mathOperations.product(2, 3);
    // Assert
    expect(result).toBe(6);
  });
});

describe("Calculator tests", () => {
  test("subtracting 5 - 3 should return 2", () => {
    // Arrange and Act
    var result = mathOperations.diff(5, 3);
    // Assert
    expect(result).toBe(2);
  });
});




