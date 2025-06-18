
const modal = document.getElementById("signInModal");
const openBtn = document.getElementById("SignInBtn");
const closeBtn = document.getElementById("closeModal");
const signUpModal = document.getElementById("signUpModal");
const openSignUpBtn = document.getElementById("SignUpBtn");
const closeSignUpBtn = document.getElementById("closeSignUpModal");

openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});


openSignUpBtn.addEventListener("click", () => {
    signUpModal.classList.remove("hidden");
});

closeSignUpBtn.addEventListener("click", () => {
    signUpModal.classList.add("hidden");
});

