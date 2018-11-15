document.getElementById("task8_btn").onclick = function () {

  var myArray = [
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass2",
     isMarried:true,
     phone:"123456",
     salary: 500
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass2",
     isMarried:true,
     phone:11223344,
     salary: 300
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass3",
     isMarried:false,
     phone:2345678,
     salary: 200
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass4",
     isMarried:true,
     phone:987654,
     salary: 400
  }
];

const check = (func) => sumSalary(myArray) === s8(myArray);
console.log(`test ${check(sumSalary) ? 'passed' : 'not passed'}`);

}


function sumSalary(arr){
  //variables
  //arr is array of objects
  //code here
    var res = 0;
    for(var i=0; i<arr.length; i++){
        res+=arr[i].salary;
    }
  return res;

    //return arr.reduce((sum,el))
}
































































































































































function s8(n){var o=0;return n.forEach(function(n){o+=n.salary}),o}