// LOGIN / SIGN UP

const loginTab =
    document.getElementById("loginTab");

const signupTab =
    document.getElementById("signupTab");

const loginForm =
    document.getElementById("loginForm");

const signupForm =
    document.getElementById("signupForm");

const goToSignup =
    document.getElementById("goToSignup");

const goToLogin =
    document.getElementById("goToLogin");

const authImage =
    document.getElementById("authImage");


// ACCOUNT CREATED MODAL

const accountCreatedModalElement =
    document.getElementById("accountCreatedModal");

const accountCreatedModal =
    accountCreatedModalElement
        ? new bootstrap.Modal(accountCreatedModalElement)
        : null;


// LOGIN

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail")
                .value.trim()
                .toLowerCase();

        const password =
            document.getElementById("loginPassword").value;

        const savedUser =
            JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {

            alert("No account found. Please create an account.");

            return;
        }

        if (
            email !== savedUser.email ||
            password !== savedUser.password
        ) {

            alert("Invalid email or password.");

            return;
        }

        localStorage.setItem(
    "currentUser",
    JSON.stringify(savedUser)
);

const loginSuccessModalElement =
    document.getElementById("loginSuccessModal");

const loginSuccessModal =
    new bootstrap.Modal(loginSuccessModalElement);

document.getElementById("welcomeUserName").textContent =
    savedUser.name;

loginSuccessModal.show();

setTimeout(function () {

    window.location.href = "index.html";

}, 1800);
        
    });

}


// SWITCH FORM

function switchForm(type) {

    if (
        !loginTab ||
        !signupTab ||
        !loginForm ||
        !signupForm ||
        !authImage
    ) return;

    const isLogin =
        type === "login";

    loginTab.classList.toggle(
        "active",
        isLogin
    );

    signupTab.classList.toggle(
        "active",
        !isLogin
    );

    loginForm.classList.toggle(
        "hidden",
        !isLogin
    );

    signupForm.classList.toggle(
        "hidden",
        isLogin
    );

    authImage.src =
        isLogin
            ? "My Images/Login.jfif"
            : "My Images/Signup.jfif";

}


// LOGIN TAB

if (loginTab) {

    loginTab.addEventListener(
        "click",
        () => switchForm("login")
    );

}


// SIGN UP TAB

if (signupTab) {

    signupTab.addEventListener(
        "click",
        () => switchForm("signup")
    );

}


// GO TO SIGN UP

if (goToSignup) {

    goToSignup.addEventListener(
        "click",
        () => switchForm("signup")
    );

}


// GO TO LOGIN

if (goToLogin) {

    goToLogin.addEventListener(
        "click",
        () => switchForm("login")
    );

}


// PASSWORD TOGGLE

const passwordToggles =
    document.querySelectorAll(".password-toggle");

passwordToggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        const targetId =
            toggle.getAttribute("data-target");

        const passwordInput =
            document.getElementById(targetId);

        const icon =
            toggle.querySelector("i");

        if (!passwordInput || !icon) return;

        const isPassword =
            passwordInput.type === "password";

        passwordInput.type =
            isPassword
                ? "text"
                : "password";

        icon.classList.toggle(
            "fa-eye",
            !isPassword
        );

        icon.classList.toggle(
            "fa-eye-slash",
            isPassword
        );

        toggle.setAttribute(
            "aria-label",
            isPassword
                ? "Hide password"
                : "Show password"
        );

    });

});


// BACK HOME BUTTON

const backHomeBtn =
    document.querySelector(".back-home-btn");

const authImageSection =
    document.querySelector(".auth-image-section");

const authContainer =
    document.querySelector(".auth-container");


function moveBackHomeBtn() {

    if (
        !backHomeBtn ||
        !authImageSection ||
        !authContainer
    ) return;

    if (window.innerWidth <= 767) {

        if (!authContainer.contains(backHomeBtn)) {

            authContainer.appendChild(
                backHomeBtn
            );

        }

        authImageSection.style.display =
            "none";

    } else {

        const imageContent =
            authImageSection.querySelector(
                ".auth-image-content"
            ) || authImageSection;

        if (!imageContent.contains(backHomeBtn)) {

            imageContent.appendChild(
                backHomeBtn
            );

        }

        authImageSection.style.display =
            "";

    }

}


window.addEventListener(
    "DOMContentLoaded",
    moveBackHomeBtn
);

window.addEventListener(
    "resize",
    moveBackHomeBtn
);


// USER SIGN UP

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("signupName")
                .value.trim();

        const email =
            document.getElementById("signupEmail")
                .value.trim()
                .toLowerCase();

        const password =
            document.getElementById("signupPassword")
                .value;

        const confirmPassword =
            document.getElementById("confirmPassword")
                .value;


        if (name === "") {

            alert("Please enter your name.");

            return;
        }


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        const user = {

            name: name,
            email: email,
            password: password

        };


        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );


        // Show success modal

        if (accountCreatedModal) {

            accountCreatedModal.show();

        }


        console.log("Name:", name);
        console.log("Email:", email);

    });

}


// PROCEED TO LOGIN

const proceedLoginBtn =
    document.getElementById("proceedLoginBtn");

if (proceedLoginBtn) {

    proceedLoginBtn.addEventListener(
        "click",
        function () {

            if (accountCreatedModal) {

                accountCreatedModal.hide();

            }

            switchForm("login");

        }
    );

}