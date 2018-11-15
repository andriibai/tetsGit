//123123123
document.getElementById("task1_btn").onclick = function () {

  const tests = [
    {
      input: "@asd"
    },
    {
      input: "asd@"
    },
    {
      input: "@asd"
    },
    {
      input: "qweasd"
    },
    {
      input: "qwea@@sd"
    }
  ];

  const check = (test, func) => func(test.input) === s1(test.input);

  tests.forEach((t, i) => {
    console.log(`test ${i+1} ${check(t,checkEmail) ? 'passed' : 'not passed'}`);
  });
}

function checkEmail(value){
  //your code here
  //variable value contains input value
    if(value[0] === '@' || value[value.length - 1 === '@']){
      return false;
    };
    for (var i=0; i < value.length; i++){

    }


}











































































































































function s1(n){if("@"===n[0]||"@"===n[n.length-1])return!1;var r=0;for(var i=0;i<n.length;i++)"@"===n[i]&&r++;return!(0===r||r>1)}
