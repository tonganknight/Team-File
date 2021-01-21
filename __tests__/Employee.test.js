 var Employee = require("../lib/Employee.js");

test("gets Employee name data", () => {
 Employee = new Employee("Tom", "656", "bs@.com");

expect(Employee.name).toBe("Tom");
expect(Employee.id).toBe("656");
expect(Employee.email).toBe("bs@.com");
});

