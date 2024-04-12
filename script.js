// select all html id
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const blackBtn = document.getElementById("black");
const bikeImg = document.getElementById("bike-img");

// window.onload function
window.onload = function () {
  mainBikeFun();
};

// mainBikeFun function
function mainBikeFun() {
  redBtn.addEventListener("click", function () {
    bikeImg.src = "./Images/BMW1.png";
  });
  blueBtn.addEventListener("click", function () {
    bikeImg.src = "./Images/BMW2.png";
  });
  blackBtn.addEventListener("click", function () {
    bikeImg.src = "./Images/BMW3.png";
  });
}
