//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/

function firstNonConsecutive(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]-1){
            
            }
        else{ 
            return i+1 + " is the first non consecutive number"
    }   
}    
}
//Call method here with parameters
console.log(firstNonConsecutive([1, 2, 3, 5, 6]))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i<= arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, "even index")
        }
    }
    return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]