let sub = document.querySelector(".submenu");
let gnb = document.querySelectorAll(".menu li");
let subs = document.querySelectorAll(".subs>ul>li");
let ht = document.querySelector(".subs").offsetHeight;
console.log(ht);
gnb.forEach(function (value, index) {
  value.addEventListener("mouseenter", function () {
    console.log(index);
    // sub.classList.add("on");
    sub.style.height = ht + "px";
  });
  value.addEventListener("mouseleave", function () {
    // sub.classList.remove("on");
    sub.style.height = 0;
  });
});
subs.forEach(function (value, index) {
  value.addEventListener("mouseenter", function () {
    console.log(index);
    sub.style.height = ht + "px";
    let x = gnb[index];
    x.classList.add("on");
  });
  value.addEventListener("mouseleave", function () {
    sub.style.height = 0 + "px";
    let x = gnb[index];
    x.classList.remove("on");
  });
});
