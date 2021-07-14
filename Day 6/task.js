/*  QUE 1 Write a JavaScript function to check whether an `input` is an array or not
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));*/

function check_array(input){
    if (Array.isArray(input)){
        return true;
    }
    else{
        return false;
    }
}
console.log(check_array('w3resource'));
console.log(check_array([1, 2, 4, 0]));

/* QUE 2 Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

function array_Clone(array){
    return [...array];
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

/* Que 3 Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.*/

function first_element(arr,n){
    if(n<0){
        return [];
    }
    return arr.slice(0,n);
}
console.log(first_element([7, 9, 0, -2]));
console.log(first_element([],3));
console.log(first_element([7, 9, 0, -2],3));
console.log(first_element([7, 9, 0, -2],6));
console.log(first_element([7, 9, 0, -2],-3));


/*QUE 4. Write a simple JavaScript program to join all elements of the following array into a string.
*/
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','));
console.log(myColor.join(''));
console.log(myColor.join('+'));

/* Que 5. Write a JavaScript program to find the most frequent item of an array*/

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  var max= 0;
  var max_count=1;
  var element;
  for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr1.length;j++){
      if(arr1[i]==arr1[j]){
        max++
      }
      if(max > max_count){
        max_count=max;
        element = arr1[i];
      }
    }
    max=0;
  }
 console.log(element + " ("  + max_count + "times) ");

