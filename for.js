var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
  
  for (var i in obj) {
    for (var j in obj[i]) {
      console.log(j + ':'+obj[i][j]);
    }
  }

  console.log("******************************************************************************")
  
  var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]
  obj.forEach(function(x) {
    console.log("person "+ x.person)
    console.log("age "+ x.age)
    console.log("company "+ x.company)
  });

  console.log("******************************************************************************")

  var obj = 
  
    [ {person: "Name 1", age: "2", company: "GUVI"} ,
     {person: "Name 2", age: "5", company: "GUVI geek"},
     {person: "Name 3", age: "8", company: "GUVI geek network"},
    ];
  
     
    for (const element of obj) {
        console.log("person: "+element.person);
        console.log("age: "+element.age);
        console.log("company: "+element.company);

      }
     
     

     console.log("******************************************************************************")

     var o = [
        { person: "Name 1", age: "2", company: "GUVI" },
        { person: "Name 2", age: "5", company: "GUVI geek" },
        { person: "Name 3", age: "8", company: "GUVI geek network" },
      ];
      var d = obj.length;
      for(i=0;i<d;i++){
          console.log("person: " +o[i].person)
          console.log("age: " +o[i].age)
          console.log("company: " +o[i].company)
      }