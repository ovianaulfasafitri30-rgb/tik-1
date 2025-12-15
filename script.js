function login() {
  document.getElementById("loginPage").classList.remove("active");
  document.getElementById("mainPage").classList.add("active");

  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("logoutBtn").style.display = "inline-block";
}

function logout() {
  document.getElementById("mainPage").classList.remove("active");
  document.getElementById("loginPage").classList.add("active");

  document.getElementById("logoutBtn").style.display = "none";
  document.getElementById("loginBtn").style.display = "inline-block";
}

function showLogin() {
  document.getElementById("mainPage").classList.remove("active");
  document.getElementById("loginPage").classList.add("active");
}
