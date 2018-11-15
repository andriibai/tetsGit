document.getElementById("task7_btn").onclick = function () {

  var usersArray = [
    {
       login:"lol",
       email:"lol@gmail.com",
       password:"pass2",
       isMarried:true,
       phone:"123456"
    },
    {
       login:"lol",
       email:"lol@gmail.com",
       password:"pass2",
       isMarried:true,
       phone:11223344
    },
    {
       login:"lol",
       email:"lol@gmail.com",
       password:"pass3",
       isMarried:false,
       phone:2345678
    },
    {
       login:"lol",
       email:"lol@gmail.com",
       password:"pass4",
       isMarried:true,
       phone:987654
    }
  ]
    const newUser = {
      login:"test",
      email:"test@gmail.com",
      password:"test",
      isMarried:true,
      phone:"123456"
    }

    console.log(addUser(newUser.login, newUser.email, newUser.password, newUser.isMarried, newUser.phone, usersArray))
  }


  function addUser(login, email, password, isMarried, phone, arr){

    //variables
    //login -> login
    //email -> email
    //password -> password
    //isMarried -> isMarried value
    // phone -> phone
    //code here;


  }
