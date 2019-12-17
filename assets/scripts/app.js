const loginBtn = document.querySelector(".auBtnLogin");
const signupBtn = document.querySelector(".auBtnSignup");



window.addEventListener('load', () => {
    loginBtn.classList.add('activeBtn');
});


loginBtn.addEventListener("click", function () {
    document.querySelector("#login").style.display = "block";
    document.querySelector("#signup").style.display = "none";
    this.classList.add('activeBtn');
    signupBtn.classList.remove('activeBtn');
    document.querySelector("#login").classList.add("activeLogin");
    console.log("hellow");
});
signupBtn.addEventListener("click", function () {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#signup").style.display = "block";
    loginBtn.classList.remove('activeBtn');
    this.classList.add('activeBtn');
    document.querySelector("#signup").classList.add("activeSignup");
    console.log("hellow");
});
