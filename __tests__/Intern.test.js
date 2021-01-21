
const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

test(" get Data from intern", () => {
 const intern = new Intern("Paul", "252", "paul@something.com", "Hogwarts");


expect(intern.getName()).toBe("Paul");
expect(intern.getId()).toBe("252");
expect(intern.getEmail()).toBe("paul@something.com");
expect(intern.getSchool()).toBe("Hogwarts");
expect(intern.getRole()).toBe("Intern");
});