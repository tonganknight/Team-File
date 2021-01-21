const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

test("get information for Manager", () =>{
const manager = new Manager("Mike", "1785", "Mike@yourboss.com", "221");

expect(manager.getName()).toBe("Mike");
expect(manager.getId()).toBe("1785");
expect(manager.getEmail()).toBe("Mike@yourboss.com");
expect(manager.getOfficenumber()).toBe("221");
expect(manager.getRole()).toBe("Manager");

});