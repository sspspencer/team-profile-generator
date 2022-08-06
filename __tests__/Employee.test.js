const Employee = require("../lib/Employee");

test("creates a Employee object", () => {
  const employee = new Employee("Dave", "1", "ssptuningperformance@gmail.com");
  console.log(employee);

  expect(employee.name).toBe("Dave");
  expect(employee.id).toEqual("1");
  expect(employee.email).toEqual("ssptuningperformance@gmail.com");
  expect(employee.getName()).toEqual("Dave");
  expect(employee.getID()).toEqual("1");
  expect(employee.getEmail()).toEqual("ssptuningperformance@gmail.com");
  expect(employee.getRole()).toEqual("Employee");
});
