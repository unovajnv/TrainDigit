import { ispresent } from "./attendence.js";
if(ispresent==0) console.log("Part time Employee today`s wages is zero");
else
{
    var partTwages = Math.floor(Math.random() * (4)) + 1;
    var totalpartTwages = partTwages*20;
    console.log("Total wages of part time employee is " + totalpartTwages);
}