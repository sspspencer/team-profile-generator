const Manager = require("../lib/Manager");

test("creates a Employee Manager object", () => {
  const employee = new Manager(
    "Stuart",
    "2",
    "ssptuningperformance@gmail.com",
    "1"
  );
  console.log(employee);

  expect(employee.name).toBe("Stuart");
  expect(employee.id).toBe("2");
  expect(employee.email).toBe("ssptuningperformance@gmail.com");
  expect(employee.officeNum).toBe("1");
  expect(employee.getRole()).toEqual("Manager");
});
