//this document contains code for experimenting and learning
let myVar = 1;
console.log(myVar);
myVar += "text";
console.log(myVar);
document.write(myVar);

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
document.write(myStr);
const goodStr = "Hi, everything is fine. Jim says 'hi'.";

console.log(goodStr);

let myName = "Rowan";
let myIntro = "Hi. Nice to meet you. "+myName+" is the name.";
document.write(myIntro);

let str = "10000";
let str2 = "100000";
let str3 = str2.length-str.length;
console.log(str3);

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective +" " + myNoun + " " + myVerb + " ran " + myAdverb + "."; // Change this line
// Only change code above this line
document.write(wordBlanks);

function multiplier(hat) {
    return hat *5;
}

let answer = multiplier(3);
console.log(answer);

function square(number) {
    return number*number;
}

const bigNumber = square(10);
document.write(bigNumber);

//define global variable
globalVariable = 40;

const normal = globalVariable*3;
console.log(normal);

//change global variable
globalVariable = 2;

const fish = 2*globalVariable;
console.log(fish);

function standard(isBig) {
    if (isBig>12) {
    return "wow";
    }
    if (isBig==="wild") {
        return "correct!";
    }
    return "shut up";
}

console.log(standard(1));
console.log(standard(13));
console.log(standard("wild"));
console.log(standard("cheese"));

function compare(value) {
    if (value===3) {
        return "true";
    }
        return "false";
}

function compare1(value) {
    if (value==3) {
        return "true";
    }
        return "false";
}

console.log(compare(3)); // true
console.log(compare("3")); // false
console.log(compare1("3")); // true
console.log(compare(3)); // true
console.log(compare1("three")); // false



// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookUp = {
      "alpha": "Adams",
      "bravo": "Boston",    
      "charlie": "Chicago",
      "delta": "Denver",    
      "echo": "Easy",
      "foxtrot": "Frank",   
    }
    
    result = lookUp[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("Chicago");
    console.log(phoneticLookup("Chicago"));

    console.log("new start");

    function checkForProperty(object, property) {
        //return object.hasOwnProperty(property);
            console.log(object.hasOwnProperty(property));
      }
      
      checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
      checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false

      someObject = {
        top: 'hat', 
        bottom: 'pants'
      }

      checkForProperty("someObject", "shoes"); // false
      checkForProperty(someObject, "shoes"); // false
      checkForProperty(someObject, "top"); // true
      checkForProperty("someObject", "pants"); // false
      


      function someFunction () {
        console.log("this comes first")
      }

      function someOtherFunction() {
        console.log("this comes after")
      }

      setTimeout(someFunction, 2000);
      setTimeout(someOtherFunction,200);


      let button = document.querySelector('button');
  

     function doSth() {
        console.log("clickityclick")
      };


      button.addEventListener('click',doSth);
      
      let examplePromise = new Promise(function (resolve, reject) {
        let sum;
        setTimeout(function(){
          sum = 5 + 6;
          if(sum > 10) {
            resolve(sum);
          }else{
            reject('The promise has been rejected');
          }     
        }, 2000);
      });

      console.log('some piece of code');
examplePromise.then(function(result){
  console.log(result);
}).catch(function (error) {
  console.error(error);
});
console.log('another piece of code');

