//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item in the given array.

  //Code Here
function first(arr){
  return arr[0];
}

//Next problem



var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item in the given array.


  //Code Here
function last(arr){
  return arr[(arr.length-1)];
}

//Next Problem


var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  //Code Here

  function looper(family){
    for(var i = 0; i < family.length; i++){
      alert(family[i]);
    }
  }


//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

  //Code Here

  function reversedLooper(letters){
    for(var i = letters.length-1; i >= 0; i--){
      alert(letters[i]);
    }
  }

//Next Problem


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  //Code Here

function evenFinder(arr){

  for(var i = 0; i < arr.length; i++){
    if(arr[i]%2 != 0){
      arr.splice(i, 1);
    }
  }

  return arr;

}


  



// =============================================
// =============================================
// EXTRA PRACTICE PROBLEMS BELOW
// =============================================
// =============================================






//Next problem


var numbersArray = [1,2,34,54,55,34,32,11,19,17,54,66,13];
//Write a function called divider that is given one argument, numbersArray.
//Have divider return an Array with the first item in the array being the evens array (all the even values from numbersArray) and the second item in the Array being the odds array (all the odd values from numbersArray).



  //Code Here

function divider(arr){
  var newArr = [];
  var odds = [];
  var evens = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i]%2 != 0){
      evens.push(arr[i]);
    }
    else{
      odds.push(arr[i]);
    }
  
  }
  newArr.push(odds, evens);
  return newArr;
}

//Next Problem


var getRandomArbitrary = function() {
  return Math.floor(Math.random() * 30);
};
// var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30.  There is also a commented out array full of numbers to help you visualize what your function will be receiving.

// Your job is to write a function named finder that will get a random number (by invoking getRandomArbitrary), then loop through the array (that will be passed in as a parameter) to see if that random number is in the array. If it is, return true, if it's not, return false

  //Code Here
function finder(arr){
  var checky;
  var findMe = getRandomArbitrary();

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === findMe){
      checky = true;
    }
    else{
      checky = false;
    }
  }

  return checky;
// this returns a boolean, true/false-- idk why it's not working?
}



//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.

  In both the removeItem function and the addItem function, you will also need to check for valid aurguments. Specrunner will try to call your functions without passing in valid aurguments. When this happens, you will need to respond by returning an empty array.
*/

  //Code Here

  function removeItem(arr, item){
    if(arr.includes(item)){
      arr.splice(arr.indexOf(item), 1);
      return arr;
    }
    else{
      return arr;
    }
  }

  function addItem(arr, item){
    if(arr.includes(item)){
      return arr;
    }
    else{
      arr.push(item);
      return arr;
    }
  }

//removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  //Code Here

  function maker(){
    var newArr = [];
    for(i = 1; i <= 215; i++){
      newArr.push(i);
    }
    return newArr;
  }


//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

  //Code Here

  function addTen(arr){
    var intMe;
    var newArr = [];
        for(var i = 0; i < arr.length; i++){
          intMe = parseInt(arr[i]);
          intMe += 10;
          newArr.push(intMe);
        }
        return newArr;
    
    }

//Next Problem



var num1 = Math.floor(Math.random() * 30);
var num2 = Math.floor(Math.random() * 30);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number of values to both arr1 and arr2.
//Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. Return the array which is longest.

  //Code Here
   function longer(arr1,arr2){
     if(arr1.length > arr2.length){
       return arr1;
     }
     else{
       return arr2;
     }
   }


/*
As a continuation of the previous problem, write another function called 'both'.

Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).

'both' should return a new array with the matching numbers found in both arr1 and arr2.

Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

  //Code Here

  function both(arr1, arr2){
    var newArr = [];
    for(var i = 0; i < arr1.length; i++){
      for(var j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]){
          newArr.push(arr2[j])
        }
      }
    }
    return newArr;
  }



//NEXT PROBLEM




var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

  //Code Here

  devMountainEmployees = [{name: 'Tyler',
  position: 'Lead Instructor/Engineer',
  spiritAnimal: 'Honey Badger'}, {name: 'Cahlan',
  position: 'CEO',
  spiritAnimal: 'butterfly'}, {name: 'Ryan',
  position: 'Marketing',
  spiritAnimal: 'fox'},{name: 'Colt',
  position: 'Everything really',
  spiritAnimal: 'Young Male Horse'}];

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

  //Code Here

  function byeCahlan(arr){
    for(var i = 0; i < arr.length; i++){
      for(var prop in arr){
        if(arr[i]["name"] === "Cahlan"){
          arr.splice(i, 1);
          
        }
      }
    }
    return arr;
  }
    
  byeCahlan(devMountainEmployees);


//NEXT PROBLEM


/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

  //Code Here

  var users = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
};

//Your Code Here

users = [user1, {
  name: 'Mackenzie',
  email: 'blah@ugh.com',
  password: 'badpw',
  username: 'uname'
}, {
  name: 'Cat',
  email: 'meowmeow@gmail.com',
  password: 'fishfish',
  username: 'acat'
}]

/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular index he's located in, delete him from the array.*/

  //Code Here

  function deleteUser(arr, email){
    for(var i = 0; i < arr.length; i++){
      for(var prop in arr){
        if(arr[i]["email"] === email){
          arr.splice(i, 1);
          
        }
      }
    }
    return arr;
  }

  deleteUser(users, "tylermcginnis33@gmail.com");

//The activity we just did is very much how data works in 'the real world'.
