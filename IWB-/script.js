<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, inital-scale=1" />
<title>javascript</title>
</head>
<body>
document.addEventListener("DOMContentLoaded", function() {let bannerText= document.querySelector(".banner h2");
let messages = ["Introducing Our New Data Recovery & Destruction Tools";
"Recover & Securely Erase Your Data with Ease!",
"Try Our New Data Tools - Affordable Monthly Plans"];

let index = 0;
setInterval(() => {bannerText.textContent =messages[index];
index = (index + 1) % messages.length;}, 3000);});

function submitForm(event) {event.preventDefault();
alert("Thank you for reaching out! We will contact you soon.");}
</body>
</html>