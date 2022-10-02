//Problem 1:

 //Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3.  
  
 let args=[2,3,6,1,7]; 
 let k=0; 
     let x =parseInt(args[0]); 
     let y =parseInt(args[1]); 
    for(let i=0; i<y; i++) 
  { 
     k=args[1]; 
  } 
  console.log((y+1), "th digit from last is ="+k);

 //Problem 2: 
 //Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20 
  
 var value = 23617;
sum = value.toString().split('').map(Number).reduce(function(a,b){return a+b},0);
console.log(sum);


 //Problem 3: 
 //Write program to find sum of even digits. Input 23617 output 2+6=8. 
  
 let  numStr = [2,3,6,1,7]; 
    let sum = 0; 
    for (let i = 0; i < numStr.length; i++) { 
       if (numStr[i] % 2 === 0){ 
     sum = sum + numStr[i]; 
  } 
    } 

  console.log(sum);



 //Problem 4: 
 //Write a JavaScript that calculates the squares and cubes of the numbers from 0 to 10. 
  
 for(let i=0;i<=10;i++) 
 { 
    console.log("square"+(i*i)); 
    console.log("cube"+(i*i*i)); 
 }


 /*Problem 5: 
 Develop and demonstrate JavaScript script that uses functions for the following problems:  
 1.        Parameter: A string  
 2.        Output: The position in the string of the left-most vowel  
 3.        Parameter: A number   
 4.        Output: The number with its digits in the reverse order 
 */ 
 function vowel(str) 
 { 
      var x=str.split(",") 
    console.log(x[0]) 
 } 
 vowel("a,e,i,o,u") 
  
 function reverse_a_number(n) 
 { 
     n =n+""; 
     returnn.split("").reverse().join(""); 
 } 
 console.log(Number(reverse_a_number(34587)));



 //Problem 6: 
 //Write a JavaScript program where the program takes a random integer between 1 to 10, 
//  the user is then prompted to input a guess number. 
// If the user input matches with guess number, the program will display a message "You WIN" otherwise display a message "Not matched". 
  
 const num = Math.ceil(Math.random()*10); 
 
 let gnum=5; 
 if (gnum == num) 
     console.log('Matched'); 
else 
     console.log('Not matched, the number was' +gnum);


 //Problem 7: 
 //Write a JavaScript program to check whether 10 appears in first or last position of a given array of integers. 
//  The array length must be greater or equal to 2. 
  
 function first_last(nums) 
 { 
    var end_pos = nums.length - 1; 
    if(nums.length>=2){ 
    return nums[0] == 10 || nums[end_pos] == 10; 
    } 
 } 
 console.log(first_last([10])); 
 console.log(first_last([3, 3, 9, 7])); 
 console.log(first_last([4, 6, 8]));



 /*Problem 8: 
 Write a JavaScript function that returns a passed string with letters in alphabetical order. 
 Example string: 'comsats' 
 Expected Output: 'acmost' 
 */ 
 function alphabet_order(str) 
 { 
 return str.split('').sort().join(''); 
 } 
 console.log(alphabet_order("comsats"));