// Ques-10:- 10	Write a function that takes in an object and returns the number of properties in the object.
// Soln:-
let x={
    name: "Dixit",
    Age: 26,
    Phone:100,
    location: "Gurgaon",
   }
function objectPropLength (obj){
    let count=0;
    for(let key in obj){
        count++;
    }
    return count;
}
console.log(objectPropLength(x))