const pageLoader = document.getElementById("page-loader");
const loaderProgress = document.getElementById("loaderProgress");
const loaderPercentage = document.getElementById("loaderPercentage");

let progress = 0;
let pageLoaded = false;

// Minimum loading time
const minimumLoadTime = 4000;
const startTime = Date.now();


// Slowly increase progress
const loadingInterval = setInterval(() => {

    if (progress < 90) {

        progress += Math.random() * 2;

        if (progress > 90) {
            progress = 90;
        }

        loaderProgress.style.width = `${progress}%`;
        loaderPercentage.textContent = `${Math.floor(progress)}%`;
    }

}, 100);


// Check when the page has finished loading
window.addEventListener("load", () => {

    pageLoaded = true;

    finishLoader();

});


// Finish only after BOTH conditions are met
function finishLoader() {

    if (!pageLoaded) return;

    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

    setTimeout(() => {

        clearInterval(loadingInterval);

        progress = 100;

        loaderProgress.style.width = "100%";
        loaderPercentage.textContent = "100%";

        // Give the user a moment to see 100%
        setTimeout(() => {

            pageLoader.classList.add("hide");

        }, 400);

    }, remainingTime);

}