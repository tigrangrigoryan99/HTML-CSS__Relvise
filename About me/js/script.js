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

