function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length,c.length);
      }
  }
  return "";
}

function delete_cookie(name) {
  if (getCookie(name) == "true") {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    console.log("Cookie Deleted");
  }
  else console.log("Cookie Not Found");
};

var user = "user";
var password = "password";

function login() {
  var real_user = $("#user-form")[0].value;
  var real_password = $("#password-form")[0].value

  if (real_user != user || real_password != password) {
    console.log("Login Failed");
    $('#login-failed').show();
  }
  else if (real_user == user && real_password == password) {
    setCookie("login", true, 365);
    console.log("Login Successful");
    window.location = "index.html";
  }
}

function logout() {
  delete_cookie("login");
}

$( document ).ready(function() {
  $('#login-failed').hide();
  
  if (getCookie("login") == "true") {
    $("#login_tab").hide();
    $("#logout_tab").show();
  }
  else {
    $("#login_tab").show();
    $("#logout_tab").hide();
  }
  
});
