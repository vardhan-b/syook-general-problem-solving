// EASY

// 1.Am I perfect

function perfectNumber(n){
  let sum = 0;
  let rem = 0;
  for(let i =1; i<n;i++){
    rem= n%i
    if(rem == 0){
      sum += i
    }
  }
  if(sum == n){
    return "perfect number"
  }
  else if(sum>n){
    return "Abundant"
  }
  
  return "Deficient"
}

console.log(perfectNumber(6));
//6 -> factors(1,2,3) -> sum (1+2+3) = 6 (perfect number)

console.log(perfectNumber(12));
// 12 -> factors(1,2,3,4,6) -> sum(1+2+3+4+6) = 16 > 12 (Abundant)

console.log(perfectNumber(8));
// 8 -> factors(1,2,4) -> sum(1+2+4) = 7 < 8 (Deficient)

