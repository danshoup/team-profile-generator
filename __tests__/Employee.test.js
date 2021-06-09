const Employee = require("../lib/Employee.js");


describe("Employee class", () => {
    it("Should create an object with a name, id, and email, if provided valid arguments", () => {
        const employee = new Employee('Joe', 42, 'joe@joe.com');

        expect(employee.name).toEqual('Joe');
        expect(employee.id).toEqual(42);
        expect(employee.email).toEqual('joe@joe.com');
        expect(employee.role).toEqual('Employee');
    });
});

describe("getName function", () => {
    it("Should return employee name when called", () => {
        const employee = new Employee('Joe', 42, 'joe@joe.com');

        expect(employee.getName()).toEqual('Joe');
    });
});

describe("getId function", () => {
    it("Should return employee id when called", () => {
        const employee = new Employee('Joe', 42, 'joe@joe.com');

        expect(employee.getId()).toEqual(42);
    });
});

describe("getEmail function", () => {
    it("Should return employee email when called", () => {
        const employee = new Employee('Joe', 42, 'joe@joe.com');

        expect(employee.getEmail()).toEqual('joe@joe.com');
    });
});

describe("getRole function", () => {
    it("Should return employee role when called", () => {
        const employee = new Employee('Joe', 42, 'joe@joe.com');

        expect(employee.getRole()).toEqual('Employee');
    });
});
