// START LOGIN / SIGN UP

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


// START SWITCH FORM

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
            ? "../My Images/Login.jfif"
            : "../My Images/Signup.jfif";

}

// END SWITCH FORM


// START LOGIN TAB

if (loginTab) {

    loginTab.addEventListener(
        "click",
        () => switchForm("login")
    );

}

// END LOGIN TAB


// START SIGN UP TAB

if (signupTab) {

    signupTab.addEventListener(
        "click",
        () => switchForm("signup")
    );

}

// END SIGN UP TAB


// START GO TO SIGN UP

if (goToSignup) {

    goToSignup.addEventListener(
        "click",
        () => switchForm("signup")
    );

}

// END GO TO SIGN UP


// START GO TO LOGIN

if (goToLogin) {

    goToLogin.addEventListener(
        "click",
        () => switchForm("login")
    );

}

// END GO TO LOGIN


// END LOGIN / SIGN UP