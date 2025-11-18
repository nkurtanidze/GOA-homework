import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "რა გქვია?"
    }
  ])
  .then(answers => {
    console.log(`გამარჯობა, ${answers.name}!`);
  })
  .catch(error => {
    console.error(error);
  });
