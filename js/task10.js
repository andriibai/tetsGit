document.getElementById("task10_btn").onclick = function () {


  const tests = [
    {
      input: "5 + 3"
    },
    {
      input: "5 - 3"
    },
    {
      input: "5 * 3"
    },
    {
      input: "5 / 3"
    },
    {
      input: "1 + 1"
    }
  ];
  
  const check = (test, func) => func(test.input) === s10(test.input);
  
  tests.forEach((t, i) => {
    console.log(`test ${i+1} ${check(t,calculator) ? 'passed' : 'not passed'}`);
  });

}

function calculator(value){

  //variables
  //input is value of input
  //code
}














































































































































































function s10(r){var c=r.split(" "),e=+c[0],t=+c[2];switch(c[1]){case"+":return e+t;case"-":return e-t;case"*":return e*t;case"/":return e/t}}
