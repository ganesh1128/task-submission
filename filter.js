var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  
var a = data 
.filter(function(el) {
  return el.currencies[0].name == "United States dollar"
})
.map(function(x){
    return  x.name 
})
.reduce(function(x,y){
return x + " , " +  y;
})
console.log(a);
};

xhr.send();


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  
var a = data 
.filter(function(el) {
  return el.region == "Asia"
})
.map(function(x){
    return  x.name 
})
.reduce(function(x,y){
return x + " , " +  y;
})
console.log(a);
};

xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  
   var a = data 
  .filter(function(el) {
    return el.population <= 200000
  })
  .map(function(x){
      return  x.name + " : " + x.capital
  })
  .reduce(function(x,y){
  return x + " , " +  y;
  })
  console.log(a);
  };
  xhr.send();

  var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  
   var a = data 
  .map(function(x){
      return  x.population
  })
  .filter(function(el) {
    return el >= 0
  })
  .reduce(function(x,y){
  return x +  y;
  })
  console.log(a);
  };
  xhr.send();

  
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  
  data.forEach(element => {
    console.log(element.name + "," + " : " + element.capital)
    console.log("continent :" + element.region + ","  + " population : " + element.population)
    console.log(element.flag);
  }); };
xhr.send();
