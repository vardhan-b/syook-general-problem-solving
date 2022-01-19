//EASY

//2. How many trails to 1?

let count = 0;
function trailsToOne(n){
 
  if(n == 1){
    return count;
  }
  
  if(n%2 == 0){
    n = n/2;
    count++;
  }
  else{
    n = (n*3)+1;
    count++
  }
  return trailsToOne(n)
}

console.log(trailsToOne(12));

//output:9
//as the number 12 takes 9 steps to become 1