document.getElementById("task2_btn").onclick = function () {

  const tests = [
    {
      input: "123123"
    },
    {
      input: "qwe123"
    },
    {
      input: "123qwe"
    },
    {
      input: "qweqwe123qwe"
    },
    {
      input: "asdzxc123123"
    },
    {
      input: "12312312"
    }
  ];
  
  const check = (test, func) => func(test.input) === s2(test.input);
  
  tests.forEach((t, i) => {
    console.log(`test ${i+1} ${check(t,checkPhone) ? 'passed' : 'not passed'}`);
  });

}

function checkPhone(value){

  //your code here
  //variable value contains input value

    return (typeof value == 'string' || typeof value == 'number') && !isNaN(value - 0) && value !== '';

    //return Boolean(+value);

};






































































































function s2(n){return!!+n}