import inquirer from "inquirer";
let tasks = [];
let num1;
while (1 > 0) {
    console.log("\nWelcome, Here you can manage your Todo List!\n");
    let a = await inquirer.prompt([
        {
            name: "ask",
            type: "list",
            message: "Please select what would you like to do !",
            choices: ["Add to do's to list", "Remove to do's from list", "Show your list", "Exit"]
        },
    ]);
    if (a.ask === "Add to do's to list") {
        let add = await inquirer.prompt([{
                name: "addtodo",
                type: "string",
                message: "\n Enter New Task:"
            }]);
        tasks.push(add.addtodo);
        console.log("\n To do's added successfully!\n");
    }
    else if (a.ask === "Remove to do's from list") {
        let del = await inquirer.prompt([{
                name: "deltodo",
                type: "list",
                message: "Please select which tasks would you like to remove !",
                choices: [...tasks]
            }]);
        num1 = tasks.indexOf(del.deltodo);
        delete tasks[num1];
    }
    else if (a.ask === "Show your list") {
        for (let i = 0; i < tasks.length; i++) {
            console.log("Sure, here are your to do's \n" + tasks[i] + '\n');
        }
    }
    else if (a.ask === "Exit") {
        console.log("Bye Bye !");
        break;
    }
}
