/* =====================================================
   LOADING SCREEN
===================================================== */

window.addEventListener("load", function () {

    const loadingScreen =
        document.getElementById("loading-screen");


    setTimeout(function () {

        loadingScreen.classList.add("hide");

    }, 2800);

});
