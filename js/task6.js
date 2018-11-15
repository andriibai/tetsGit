document.getElementById("task6_btn").onclick = function () {

  const tests = [
    {
      password1: "qwe",
      password2: "qwe"
    },
    {
      password1: "qwer",
      password2: "qwe"
    },
    {
      password1: "qwerty",
      password2: "qwerty"
    },
    {
      password1: "qweqweqwe",
      password2: "qweqweqwe"
    },
    {
      password1: 0,
      password2: false
    }
  ];
  
  const check = (test, func) => func(test.password1, test.password2) === s6(test.password1, test.password2);
  
  tests.forEach((t, i) => {
    console.log(`test ${i+1} ${check(t,confirmPass) ? 'passed' : 'not passed'}`);
  });

}

function confirmPass(pass1, pass2){
  //pass1 -> first password
  //pass2 -> second password
  //code here;
   return pass1 === pass2;
}































































































































































function s6(n,r){return n===r}