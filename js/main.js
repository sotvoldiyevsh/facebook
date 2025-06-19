
const modal = document.getElementById("signInModal");
const openBtn = document.getElementById("SignInBtn");
const closeBtn = document.getElementById("closeModal");
const signUpModal = document.getElementById("signUpModal");
const openSignUpBtn = document.getElementById("SignUpBtn");
const closeSignUpBtn = document.getElementById("closeSignUpModal");

const signInBtn = document.getElementById("SignInBtn");
const signUpBtn = document.getElementById("SignUpBtn");
const signInModal = document.getElementById("signInModal");
const closeModal = document.getElementById("closeModal");
const closeSignUpModal = document.getElementById("closeSignUpModal");




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





signInBtn.addEventListener("click", () => signInModal.classList.remove("hidden"));
signUpBtn.addEventListener("click", () => signUpModal.classList.remove("hidden"));
closeModal.addEventListener("click", () => signInModal.classList.add("hidden"));
closeSignUpModal.addEventListener("click", () => signUpModal.classList.add("hidden"));


const signUpBtnInside = signUpModal.querySelector("button.bg-green-600");
signUpBtnInside.addEventListener("click", () => {
    const name = signUpModal.querySelector("input[placeholder='Full Name']").value;
    const email = signUpModal.querySelector("input[placeholder='Email']").value;
    const password = signUpModal.querySelector("input[placeholder='Password']").value;

    if (name && email && password) {
        const user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Muvaffaqqiyatli ro'yhatdan o'tildi");
        signUpModal.classList.add("hidden");
    } else {
        alert("Iltimos, barcha joylarni to‘ldiring.");
    }
});

const signInBtnInside = signInModal.querySelector("button.signInLogBtn");
signInBtnInside.addEventListener("click", () => {
    const email = signInModal.querySelector("input[placeholder='Email or Phone']").value;
    const password = signInModal.querySelector("input[placeholder='Password']").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && (email === user.email) && (password === user.password)) {
        alert("Qaytganingiz bilan, " + user.name + "");
        localStorage.setItem("session", JSON.stringify({ email }));
        signInModal.classList.add("hidden");
    } else {
        alert("Email yoki parol noto‘g‘ri");
    }
});

const loginBtn = document.querySelector("main button.mainBtn");
loginBtn.addEventListener("click", () => {
    const email = document.querySelector("main input[placeholder='Email or phone number']").value;
    const password = document.querySelector("main input[placeholder='Password']").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && email === user.email && password === user.password) {
        alert("Hush kelibsiz, " + user.name + "");
        localStorage.setItem("session", JSON.stringify({ email }));
    } else {
        alert("Noto‘g‘ri malumotlar. Iltimos, qaytadan urinib ko‘ring.");
    }
})
