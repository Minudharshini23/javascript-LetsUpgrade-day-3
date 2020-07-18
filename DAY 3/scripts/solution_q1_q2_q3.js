//FIRST QUESTION
console.log("solution for first question");
let input=+prompt("ENTER A NUMBER");
console.log(input);
let oe=function()
{
    sol=input%2;
    return sol;
}
oe();
// console.log(sol);
if(sol%2==0)
{
    console.log(`THE NUMBER ENTERED IS ${input} AND THE NUMBER IS EVEN `);
}
else{
    console.log(`THE NUMBER ENTERED IS ${input} AND THE NUMBER IS ODD `);
}

//SECOND QUESTION
console.log("solution for second question");
let osver_input=prompt("ENTER UR MODEL");
var divide=osver_input.split(" ");
console.log(`The OS name is ${divide[0]} and the version is ${divide[1]}`);

//THIRD QUESTION
console.log("solution for third question");
let user_ip=prompt("ENTER YOUR MARKS");
let grade=(user_ip==100 && user_ip>85)? `Marks are ${user_ip} and grade is O+` :
(user_ip>=84 && user_ip<=70)? `Marks are ${user_ip} and grade is O` :
(user_ip>=60 && user_ip>50)? `Marks are ${user_ip} and grade is A` :
(user_ip<=50)? `Marks are ${user_ip} and grade is B` :
 ` Marks are ${user_ip} and grade is F`;
 console.log(grade);





