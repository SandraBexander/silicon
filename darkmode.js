const darkModeSwitch = document.querySelector("#darkmode-switch");
const mode = localStorage.getItem("mode");


if (mode == null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
} else if(mode == "light") {
    enableLightMode();
} else if(mode == "dark") {
    enableDarkMode();
}


darkModeSwitch.addEventListener("change", () => {
    if (darkModeSwitch.checked) {
        enableDarkMode();
        localStorage.setItem("mode", "dark");
    } else {
        enableLightMode();
        localStorage.setItem("mode", "light");
    }
});


function enableDarkMode() {
    darkModeSwitch.checked = true;
    document.body.setAttribute("data-theme", "dark");
}

function enableLightMode() {
    darkModeSwitch.checked = false;
    document.body.setAttribute("data-theme", "light");
}