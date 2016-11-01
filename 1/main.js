class User {
  constructor(_fname, _lname, _age, _email, _imUrl) {
    this.fname = _fname;
    this.lname = _lname;
    this.age = _age;
    this.email = _email;
    this.imUrl = _imUrl;
  }

  toString() {
    return this.fname + "" + this.lname + "" + this.age + "" + this.email + "" + this.imUrl;
  }

}

var allUsers = [];

function btnSendClick() {
  let data = {};
  data.fname = document.getElementById("fname").value;
  data.lname = document.getElementById("lname").value;
  data.age = document.getElementById("age").value;
  data.email = document.getElementById("email").value;
  data.imUrl = document.getElementById("imUrl").value;
  if (!data.imUrl) {
    data.imUrl = 'images/1.png'
  }
  if (data.fname != "" && data.lname != "" && data.age > 0 && data.age < 100) {
    allUsers.push(new User(data.fname, data.lname, data.age, data.email, data.imUrl));
    console.log("Added new user");
  }
  else {
    console.log("Error");
  }
}

function btnPrintClick() {
  clearPage();
  let body = document.body;
  let user = "<div class = inAction>\n";
  for (let i = 0; i < allUsers.length; i++) {
    user += "<h1 class = number>" + (i + 1) + "</h1>";
    user += "<p> <img src = " + allUsers[i].imUrl + "> </p>";
    user += "<p class = info> First name: " + allUsers[i].fname + "</p>";
    user += "<p class = info> Last name: " + allUsers[i].lname + "</p>";
    user += "<p class = info> Age: " + allUsers[i].age + "</p>";
    user += "<p class = info> Email: " + allUsers[i].email + "</p>";
    console.log("Printed 1 user");
  }
  user += "</div>";
  body.innerHTML = user;
}

function clearPage() {
  document.body.innerHTML = "";
}
