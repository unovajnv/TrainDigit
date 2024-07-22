import { ispresent } from "./attendence.js";

if(ispresent == 0)  console.log("your Daily wages is zero");
else{
    var money = Math.floor(Math.random() * (8)) + 1;
    var totalMoney = money*20;
    console.log("Your total wages of today is " + totalMoney);
}