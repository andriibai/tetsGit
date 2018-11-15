document.getElementById("task5_btn").onclick = function () {

  const users = [
    {
      login:"Bob",
      email: "bob@email.com",
      phone: 123456,
      isMarried: true,
      password: "qwerty"
    },
    {
      login:"John",
      email: "john@email.com",
      phone: 123456,
      isMarried: false,
      password: "qwerty2"
    },
    {
      login:"Vasya",
      email: "vasya@email.com",
      phone: 123456,
      isMarried: true,
      password:"qwertyqwerty"
    },
    {
      login:"Ivan",
      email: "ivan@email.com",
      phone: 123456,
      isMarried: false,
      password: "qweqwe"
    }
  ];

  const tests = [
    {
      login: "Bob",
      password: "qwerty"
    },
    {
      login: "Bob",
      password: "wrong"
    },
    {
      login: "Vasya",
      password: "qwertyqwerty"
    },
    {
      login: "Ivan",
      password: "wrong"
    },
    {
      login: "John",
      password: "qwerty"
    }
  ];
  
  const check = (test, func) => func(test.login, test.password, users) === s5(test.login, test.password, users);
  
  tests.forEach((t, i) => {
    console.log(`test ${i+1} ${check(t,checkPass) ? 'passed' : 'not passed'}`);
  });

}

function checkPass(login, pass, arr){
  //code here

    for(var i = 0; i < arr.length; i++){
        if(arr[i].login === login && arr[i].password === pass )   {
            return true;
        }
    }
    return false;

    //or
    // return arr.some(el => function (el) {
    //         el.
    //     })
}





































































































function s5(n,o,r){return r.some(function(r){return r.login===n&&r.password===o})}
