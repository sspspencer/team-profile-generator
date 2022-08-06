const Engineer = require("../lib/Engineer");

test("creates a Employee Engineer object", () => {
  const employee = new Engineer(
    "Stuart",
    "2",
    "ssptuningperformance@gmail.com",
    "ssp"
  );
  console.log(employee);

  expect(employee.name).toBe("Stuart");
  expect(employee.id).toBe("2");
  expect(employee.email).toBe("ssptuningperformance@gmail.com");
  expect(employee.github).toBe("ssp");
  expect(employee.getName()).toEqual("Stuart");
  expect(employee.getID()).toEqual("2");
  expect(employee.getEmail()).toEqual("ssptuningperformance@gmail.com");
  expect(employee.getGithub()).toEqual("ssp");
  expect(employee.getRole()).toEqual("Engineer");
});
