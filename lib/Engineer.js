var Employee = require("../lib/Employee.js");

class Engineer extends Employee {
constructor(name, id, email, githubname){
    super(name, id, email);
    this.githubname = githubname;

    

    
}

    getGithub(){
        return `${this.githubname}`;
    }

}

module.exports = Engineer;