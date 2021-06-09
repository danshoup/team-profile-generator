const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("Should create an intern object that extends employee and adds github attribute", () => {
        const intern = new Intern('Bob', 19, 'bob@bob.com', 'Princeton University');

        expect(intern.name).toEqual('Bob');
        expect(intern.id).toEqual(19);
        expect(intern.email).toEqual('bob@bob.com');
        expect(intern.role).toEqual('Intern');
    });
});

describe("getSchool function", () => {
    it("Should return intern's school when called", () => {
        const intern = new Intern('Bob', 19, 'bob@bob.com', 'Princeton University');

        expect(intern.getSchool()).toEqual('Princeton University');
    });
});

describe("getRole function", () => {
    it("Should return intern's role when called", () => {
        const intern = new Intern('Bob', 19, 'bob@bob.com', 'Princeton University');

        expect(intern.getRole()).toEqual('Intern');
    });
});
