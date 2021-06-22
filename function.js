
(function(){

    let arr = [4,5,7,8,14,45,76];
    let b = arr.filter(num => num % 2 !== 0);
    console.log('oddNumbers: ' + b);
})();



 (function(){
    let str = "ganesh kumar"
    let b = str.split(' ');
    let output = [];
     for (var i = 0; i < b.length; i++) {
        output.push(b[i].charAt(0).toUpperCase() + b[i].slice(1)); 
    }
      console.log(output.join(" "))
    })();

    
(function(){
let array = [1,2,3,4]
var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
console.log(sum);
   })();


(function(){
let a = [1,2,3]
let b = [6,4,5]
 a = [...a,...b].sort();
for(i=0;i<a.length;i++){
    var res =Math.ceil(i/2);
   var sol = (a[res]+a[res-1])/2
}
console.log(sol)
})();


(function(){
const Array = [1, 3, 2, 5, 10];
const prime = Array.filter(function(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) 
    return false;
  }
  return num !== 1;
});
console.log(prime);
})();


(function(){
    var a = [11,12,22,34,44];
     var n = []
     for(i=0;i<a.length;i++){
        temp = String(a[i]);
        var res = temp.split("").reverse().join("");
        if(res==temp){
            n.push(res)
        }       
    }
        console.log(n.join(' '))
})();


(function(){
    var a = [1,1,2,3,4,5,2,6,7,8,4,3,7,6,5,9,7,5]
    var d = new Set(a)
    console.log(...d)
})();

(function(){
let a = [1, 2, 3, 4, 5];
let n = a.length;
let k = 3;
let z =[]
for (let i = 0; i < n; i++) {
    if (i < k) {
        q=a[n + i - k]
        z.push(q);
    }else{
        x=a[i - k];
        z.push(x)
    }
    
}
console.log(z.join(' '))
})();