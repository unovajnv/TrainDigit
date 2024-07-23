import { ispresent } from "./attendence.js";
if(ispresent==0) console.log("Employee Total wages for a month is zero");
else{
    var todaywages = Math.floor(Math.random() * (8)) + 1;
    var totalMonthWages = todaywages*20;
    console.log("Your total wages for a month is " + totalMonthWages);
}