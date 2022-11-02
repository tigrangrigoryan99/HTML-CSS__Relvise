function openHeader() {
    let elemBurg = document.getElementById("burger");
    (elemBurg.classList.contains("active-menu")) 
        ? elemBurg.classList.remove("active-menu") 
        : elemBurg.classList.add("active-menu");
}

function clearActiveClass() {
    let elem = document.getElementById("activelink");
    elem.classList.remove("header-link_active");
}
function addActiveClass() {
    let elem = document.getElementById("activelink");
    elem.classList.add("header-link_active");
}

function changeWidth() {
    console.log("s");
}