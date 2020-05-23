var a;
function Main() {
  a = document.getElementById("loginMenu");
  a.style.display = "flex";
  a.style.top = "-200px";
  a.style.zIndex = "-100000";
  a.style.top = "0px";

  a.style.zIndex = "1000";
}


document.getElementById("login").addEventListener("click", Main);