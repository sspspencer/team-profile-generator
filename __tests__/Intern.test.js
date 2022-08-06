const Intern = require("../lib/Intern");

test("creates a Employee Intern object", () => {
  const employee = new Intern(
    "Stuart",
    "2",
    "ssptuningperformance@gmail.com",
    "MAC"
  );
  console.log(employee);

  expect(employee.name).toBe("Stuart");
  expect(employee.id).toBe("2");
  expect(employee.email).toBe("ssptuningperformance@gmail.com");
  expect(employee.school).toBe("MAC");
  expect(employee.getName()).toEqual("Stuart");
  expect(employee.getID()).toEqual("2");
  expect(employee.getEmail()).toEqual("ssptuningperformance@gmail.com");
  expect(employee.getSchool()).toEqual("MAC");
  expect(employee.getRole()).toEqual("Intern");
});
