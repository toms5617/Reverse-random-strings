function spinWords(string){
//break down string 
let stringArrey = string.split(" ") 

// Loop over arrey and revert strings longer than 5 chareters
for(let i=0; i<stringArrey.length; i++){
  if(stringArrey[i].length >= 5){
    stringArrey[i] = stringArrey[i].split("").reverse().join("")
    console.log("long")
  }
}

// Final concat
var result = stringArrey.toString().replace(/,/g, " ")
return result
}