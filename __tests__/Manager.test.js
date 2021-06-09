const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("Should create an manager object that extends employee and adds office phone number", () => {
        const manager = new Manager('Jenny', 32, 'jenny@jenny.com', '231-867-5309');

        expect(manager.name).toEqual('Jenny');
        expect(manager.id).toEqual(32);
        expect(manager.email).toEqual('jenny@jenny.com');
        expect(manager.role).toEqual('Manager');
    });
});

describe("getPhone function", () => {
    it("Should return manager's office pohone number when called", () => {
        const manager = new Manager('Jenny', 32, 'jenny@jenny.com', '231-867-5309');

        expect(manager.getPhone()).toEqual('231-867-5309');
    });
});

describe("getRole function", () => {
    it("Should return manager's role when called", () => {
        const manager = new Manager('Jenny', 32, 'jenny@jenny.com', '231-867-5309');

        expect(manager.getRole()).toEqual('Manager');
    });
});
