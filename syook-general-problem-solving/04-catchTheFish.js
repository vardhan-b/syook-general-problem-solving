// HARD

// 1.Catch the fish


function catchTheFish(k,l,m,n,total){
    let array = [];
  for(let i=1;i<=total;i++ ){
  
    if(i%k==0){
      array.push(i);
    }
    else if(i%l ==0){
      array.push(i)
    }
    
     else if(i%m ==0){
      array.push(i)
    }
     else if(i%n ==0){
      array.push(i)
    }
  }
  
  return array.length
}

console.log(catchTheFish(2,3,4,5,24));

// K: 2, L: 3, M: 4, N: 5, Total: 24
// Output: 17
// Explanation: 
// According to the pattern, fish numbers 1, 7, 11, 13, 17, 19, and 23 escape without getting hit by either of the 4 people.