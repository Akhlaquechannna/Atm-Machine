import inquirer from "inquirer";


interface anstype {
    userid: string,
    userpin: number,
    accountType: string,
    transectionType: string,
    amount: number,
}

const answers: anstype = await inquirer.prompt([
    {
        type: "input",
        name: "userid",
        message: "kindly enter your id: "
    },
    {
        type: "number",
        name: "userpin",
        message: "kindly enter your pin: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current","Saving"],
        message: "select your account type",
    },
    {
        type: "list",
        name: "transectionType",
        choices: ["Fast cash","withdrawl"],
        message: "select your transection",
        when(answers) {
            return answers.accountType
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000,2000,10000,20000],
        message: "select your amount",
        when(answers) {
            return answers.transectionType == "Fast cash"
        },
    },
    {
        type: "number",
        name: "amount",
        choices: [1000,2000,10000,20000],
        message: "select your amount",
        when(answers) {
            return answers.transectionType == "withdrawl"
        },
    },
])

if (answers.userid && answers.userpin){
    const balance = Math.floor(Math.random()*10000000)
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("your remaining balance is ", remaining)
        
    }else{
        console.log("insuficient Balance");
        
    }
}
