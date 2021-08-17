function isValidSubsequence(array, sequence) {
  let j = 0

 for(let i = 0; i < array.length; i++){
  let curNum = array[i]
  if(sequence[j] === curNum){
   j++
  }
  if(j === sequence.length){
   return true;
  }
  
 }
 return false
}
	// Write your code here.


// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;