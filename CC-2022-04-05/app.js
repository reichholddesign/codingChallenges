// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//P: Will the string contain any special charcters? Will the string contain no uppercase characters? An empty string ever?
//R: Return a single, ordered arr of the capital characters indexes
//E: If "ExaMPle", should return [0,3,4]
// If "MP", should return [0,1]
// If "ExaM", should return [0,3]
// p:

// Make a function that takes in a string
function capitals(word){
// create an empty array to store indexes
let capitals = [];
// Convert string to array
// iterate over array comparing each character
// push indexes into empty array
word.split("").forEach((el, i) => {
    if(el === el.toUpperCase()){
        capitals.push(i);
    }
}) // end of forEach

// return array
return capitals
}





