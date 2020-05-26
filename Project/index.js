var canvas = document.getElementById("field");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
function Snow() {
  this.x = Math.round(Math.random() * canvas.width);
  this.y = Math.round(Math.random() * canvas.height);
  this.r = Math.round(Math.random() * 4 + 1);
  this.a = Math.random() * 5;
}
Snow.prototype.update = function () {
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
  this.y += 5;
  this.x += Math.sin(this.a);
  this.a += 0.01;
  if (this.x > canvas.width || this.x < 0) {
  }
  if (this.y > canvas.height) {
    this.y = 0;
    this.x = Math.round(Math.random() * canvas.width);
  }
};
let snow1 = new Snow();
let totalSnows = 100;
let Snows = [];
function fallingSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < totalSnows; i++) {
    Snows[i].update();
  }
}
window.onload = function () {
  for (i = 0; i < totalSnows; i++) {
    Snows.push(new Snow());
  }
  setInterval(fallingSnow, 50);
};
mediumZoom(".zoom", {
  background: "#cdcdcd",
});
mediumZoom(".zoom-tmp"),
  {
    template: "#zoom-template",
    container: "#zoom-container",
    background: "#f1f1f1",
  };
let myCart = 0;
function addCart1() {
  myCart += 46;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart2() {
  myCart += 34;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart3() {
  myCart += 35;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart4() {
  myCart += 25;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart5() {
  myCart += 75;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart6() {
  myCart += 23;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart7() {
  myCart += 36;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart8() {
  myCart += 37;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart9() {
  myCart += 46;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart10() {
  myCart += 36;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
function addCart11() {
  myCart += 25;
  console.log(myCart);
  document.getElementById("my-cart").innerHTML = myCart;
}
