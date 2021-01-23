const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");


test("gets info from Engineer", () => {
  const Engi = new Engineer("mark", "656", "something@aol.com", "@github.com");
     
//     Engi.id = "656";
//     Engi.email = "something@aol.com"
//     Engi.githubname = "@github.com"

    expect(Engi.getGithub()).toBe("@github.com");
    expect(Engi.getId()).toBe("656");
    expect(Engi.getEmail()).toBe("something@aol.com");
    expect(Engi.getName()).toBe("mark");
    expect(Engi.getRole()).toBe('Employee');



    

});
