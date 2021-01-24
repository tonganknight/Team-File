var Employee = require("../lib/Employee.js");

class Engineer extends Employee {
constructor(name, id, email, githubprofile, ){
    super(name, id, email);
    this.githubprofile = githubprofile;

    

    
}

    getGithub(){
        return `${this.githubprofile}`;
    }

}

module.exports = Engineer;