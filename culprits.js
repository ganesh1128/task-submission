
//  alert( "I'm JavaScript!");

//  alert("I'm invoked!");

// alert("I'm JavaScript!");
// alert('Hello') 
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); 

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname + ' ' + lname;
// alert( admin ); 

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname + ' ' + lname;
// alert("hello" + " " + name)

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(+a + +b);

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(+a + +b);

// var a = +("2" < "12");
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// let a = +(prompt("Enter a number?"));
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// let value = prompt('How many runs you scored in this ball');
// if (value == 4) {
//       console.log("You hit a Four");
// } else if (value == 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// let login = 'Employee';
// let message = (login === 'Employee') ?  'Welcome Employee' : (login === '') ? 'No login' : ' Error';
// console.log(message);

// let message;
// if (null || 2 || undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);

// let message;
// if (null && lock && undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "Welcome BOSS";
// }
//   console.log(message);

// let message;
// let lock = 2;
// if (lock && " " && undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

// let i = 3;
// while (i>0) {
//  console.log( i );
//    i--;
// }
    


// let num = 3
// console.log(num)
// num += 2
// console.log(num)
// num += 2
// console.log(num)
// num += 3
// console.log(num)




// for (let num = 2; num <= 20; num += 2) {
//   console.log(num)
// }
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped' + " " + gifts[i] + ' ' + 'and added a bow!');
// }




// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown < 0)
//   {
//    console.log("bomb triggered");
//   }else{
//     console.log("bomb disarmed")
//   }
// }




// var lemein = "0";
// var lemeout = 0;
// var msg ="";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += ' Hello ';
// }
// console.log(msg);



//Output: 1234567891011
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
//  for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] 
// }
// console.log(new_string);


// //Output: 1,2,3,4,5,6,7,8,9,10,11
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// var new_string = [] ; 
// for (var i = 0; i < 11; i++) {
// if(i<10)
//  new_string += numsArr[i] + ",";
// else
// new_string += numsArr[i];
// }
// console.log(new_string)




// //Output: 11 10 9 8 7 6 5 4 3 2 1
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// var new_string = "";
//  for (var i = 10; i >= 0; i--) {
//  new_string += numsArr[i] + " "
// }
// console.log(new_string);



// //Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] % 2 === 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);


// //Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(i %2 === 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);


// //Output: 66
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i <=10; i++) {
// sum += numsArr[i]
//  }
// console.log(sum);


// //Output: 30
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2===0){
//  sum += numsArr[i]
//  }}
// console.log(sum);

// //Output: 94
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2===0)
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }}
//  console.log(sum);


//  //OutPut //Array(5) [ 1, 2, 3, 4, 5 ]
//           //Array(6) [ 6, 7, 8, 9, 10, 11 ]
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//  console.log( numsArr[i])
// }

// //Output: 1234567891011
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=[];
// for (var i = 0; i < numsArr.length; i++) {
// for(var j = 0 ; j < numsArr[i].length; j++ ){
//      str_all +=numsArr[i][j]
// } }
// console.log(str_all)


// //Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str=[];
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for (var j=0; j<inner_array.length; j++)
//  if(j % 2 === 0){
//      inner_array[j] = "even";
//      str += inner_array[j]
//  }else{
//      str+=inner_array[j] 
//  }}
// console.log(numsArr)


// //Output: 11 10 9 8 7 6 5 4 3 2 1
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=[];
// var n = numsArr.length
// for (var i = n-1; i>=0; i--) {
//  var inner_array = numsArr[i];
//  var m = inner_array.length;
//  for(var j = m-1 ; j >= 0 ; j--)
//      str_all +=inner_array[j] + " "
// }
//  console.log(str_all);

// //Output: 36  30
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(inner_array[j] % 2 ===0)
//  {
//  sum_even += inner_array[j]
//  }else
//  {
//  sum_odd+= inner_array[j]
//  }
// }}
// console.log(sum_odd);
// console.log(sum_even);

