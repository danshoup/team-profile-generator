const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("Should create an engineer object that extends employee and adds github attribute", () => {
        const engineer = new Engineer('Sue', 37, 'sue@sue.com', 'sueGitHub');

        expect(engineer.name).toEqual('Sue');
        expect(engineer.id).toEqual(37);
        expect(engineer.email).toEqual('sue@sue.com');
        expect(engineer.github).toEqual('sueGitHub');
        expect(engineer.role).toEqual('Engineer');
    });
});

describe("getGitHub function", () => {
    it("Should return engineer's GitHub username when called", () => {
        const engineer = new Engineer('Sue', 37, 'sue@sue.com', 'sueGitHub');

        expect(engineer.getGitHub()).toEqual('sueGitHub');
    });
});

describe("getRole function", () => {
    it("Should return engineer's role when called", () => {
        const engineer = new Engineer('Sue', 37, 'sue@sue.com', 'sueGitHub');

        expect(engineer.getRole()).toEqual('Engineer');
    });
});

