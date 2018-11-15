document.getElementById("task9_btn").onclick = function () {

  var myArray = [
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass2",
     isMarried:true,
     phone:"123456",
     salary: 500,
     dateOfBirth: 1990
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass2",
     isMarried:true,
     phone:11223344,
     salary: 300,
     dateOfBirth: 1951
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass3",
     isMarried:false,
     phone:2345678,
     salary: 200,
     dateOfBirth: 1953
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass4",
     isMarried:true,
     phone:987654,
     salary: 400,
     dateOfBirth: 1980
  }
];

  console.log(salaryUp(myArray));
}

function salaryUp(arr){

  //arr is array of objects
  //code
    for(i=0; i<arr.length; i++){
        if(arr[i].dateOfBirth < 1960){
            arr[i]+=100;
        }
    }
  return arr;

    //or

    return arr.map(function (el) {
        return{
            login:el.login,
            email:el.email,
            phone:el.phone,
            dateOfBirth: el.dateOfBirth,
            salary: el.dateOfBirth  > 1960
        }

    })
}