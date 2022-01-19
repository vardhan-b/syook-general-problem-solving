// MEDIUM

// 1.Greater than and less than in a matrix

function findNum(arr){
  var max = 0;
  for(let i = 0;i<arr.length;i++){
    
    
    max = Math.max(...arr[i]);
    var index = arr[i].indexOf(max);
    
    
    
  for(let j =0; j<arr[i].length;j++){
  
     if(max<=arr[j][index]){     
       
       if(j==arr[i].length-1){
    
       return max;
          
       }
       
     }
    else{
       break;
     }
   
     
   }
    
  }
  
  return "No such element in an given array";

}

console.log(findNum([[7,8,7],[5,4,2],[8,6,7]]));

//output : 5;
//5 is greater than or equal to other elements in row
// and lesser  than or equal to other elements in column