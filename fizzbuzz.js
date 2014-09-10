/* Amanda and Jannelle helped me a lot on this one */

for (var current = 1; current <= 100; current++) { // Defined the range
     if (current % 3 == 0 && current % 5 == 0) {
         console.log("JumboShrimp");} // Put the numbers divisible by both 3 and 5 first
    else if (current % 5 == 0) {
         console.log("Jumbo");}
    else if (current % 3 == 0) {
            console.log("Shrimp");}
    else {console.log(current);}} //Print every number left over as the number/current