let odd = () => {

    let arr = [4,5,7,8,14,45,76];
    let b = arr.filter(num => num % 2 !== 0);
    console.log('oddNumbers: ' + b);
}
odd();


let titleCaps =() => {
    let str = "ganesh kumar"
    let b = str.split(' ');
    let output = [];
     for (var i = 0; i < b.length; i++) {
        output.push(b[i].charAt(0).toUpperCase() + b[i].slice(1)); 
    }
      console.log(output.join(" "))
    }
    titleCaps();

let sumofArray =() => {
    let array = [1,2,3,4]
    var sum = array.reduce((a, b) => {
        return a + b;
    }, 0);
  console.log(sum);
}
sumofArray();

let primeArray = () =>{
    const Array = [1, 3, 2, 5, 10];
    const prime = Array.filter(num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) 
        return false;
      }
      return num !== 1;
    });
    console.log(prime.join(" "));
    }
    primeArray();

let pallendromeArray = () => {
    var a = [11,12,22,34,44,121];
     var n = []
     for(i=0;i<a.length;i++){
        temp = String(a[i]);
        var res = temp.split("").reverse().join("");
        if(res==temp){
            n.push(res)
        }       
    }
        console.log(n.join(' '))
}
pallendromeArray();