import { ispresent } from "./attendence.js";
if(ispresent == 0) console.log("Your total wage is zero ( Using Switch Statement)");
else{
    var NumberOfHours = Math.floor(Math.random()*4)+1;
    switch(NumberOfHours)
    {
        case 1:
            console.log("Your total wages is (using Switch statement)" + 20);
            break;
        case 2:
            console.log("Your total wages is (using Switch statement)" + 40); 
            break;
        case 3:
            console.log("Your total wages is (using Switch statement)" + 60);
            break; 
        case 4:
            console.log("Your total wages is (using Switch statement)" + 80);    
            break;      
    }
      
}