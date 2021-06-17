var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  
  data.forEach(element => {
    console.log(element.name)
    console.log(element.region)
    console.log(element.subregion)
    console.log(element.population)
      console.log(element.flag);
  });

};

xhr.send();
