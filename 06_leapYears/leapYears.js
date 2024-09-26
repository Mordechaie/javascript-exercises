const leapYears = function(year) {
    // Condition 1: check if a number is divisible by 4 
    // if yes = "leap year"
    // else if n divisible by 100 & not divisible by 400 = "not leaf"
    // else = "not leap year"
    // formula = n % n = 0
     if (year % 4 === 0)
     {
        return true;
    }
     else if 
        ((year % 100 === 0) && not (year % 400 === 0))
     {
        return false;
     } 
     
     else {
        return false;
     }
};


// Do not edit below this line
module.exports = leapYears;
