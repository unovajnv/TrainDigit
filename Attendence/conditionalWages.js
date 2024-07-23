import { ispresent } from "./attendence.js";
var totalWages = 0;
if(ispresent==0) console.log("Employee is absent , so there total wages will be zero");
else{
    for(var i =0; i<20; i++)
    {
        var workPerDay = Math.floor(Math.random()*8)+1;
        if(workPerDay>=100) break;
        else
        {
            totalWages += (workPerDay*20);
        }
    }
    console.log("Your total wages for 20 days(<100 Hours ) is " + totalWages);
}