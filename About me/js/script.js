function openHeader() {
    let elem = document.getElementById("body");
    elem.classList.add("act-menu");

    let elem1 = document.getElementById("active");
    elem1.classList.add("active");
}

function closeHeader() {
    let elem = document.getElementById("body");
    elem.classList.remove("act-menu");
}

function clearActiveClass() {
    let elem = document.getElementById("activelink");
    elem.classList.remove("menu-header__link_active");
}
function addActiveClass() {
    let elem = document.getElementById("activelink");
    elem.classList.add("menu-header__link_active");
}
