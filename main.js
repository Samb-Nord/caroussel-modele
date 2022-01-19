document.body.onload = function () {
    const nbr = 23;
    let p = 0;

    const slides = document.getElementById("slides");
    const right = document.getElementById('right');
    const left = document.getElementById('left');

    slides.style.width = (40 * nbr) + "rem";

    for (let i = 1; i < nbr+1; i++) {
        let div = document.createElement("div");
        div.className = "slide";
        div.style.backgroundImage = "url(img/slides/" + i + ".jpg)";
        slides.appendChild(div)
    }

    displayArrow();

    left.onclick = function () {
        if (p < 0) {
            p++;
        }
        slides.style.transform = "translate(" + p * 40 + "rem)";
        slides.style.transition = "all 0.5s ease";
        displayArrow();
    }

    right.onclick = function () {

        if (p > -nbr + 1) {
            p--;
        }
        slides.style.transform = "translate(" + p * 40 + "rem)";
        slides.style.transition = "all 0.5s ease";
        displayArrow();
    }


    function displayArrow() {
        if (p == -nbr + 1) {
            right.style.visibility = "hidden";
        } else {
            right.style.visibility = "visible";
        }

        if (p == 0) {
            left.style.visibility = "hidden";
        } else {
            left.style.visibility = "visible";

        }
    }
}