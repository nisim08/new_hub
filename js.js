document.getElementById("b").onclick = function() {

let username = document.getElementById("username").value
let password = document.getElementById("password").value
let age = document.getElementById("age").value

if( username == "nisim" & password == "eitan" & age == 19){
    window.location.href = "index2.html"
}
else{
    alert("username or password are incorect")
}
}