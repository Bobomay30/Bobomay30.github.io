/* =====================================================
   SAKURA RONIN
   JAVASCRIPT
   ===================================================== */


/* =========================
   CHERRY BLOSSOM PETALS
   ========================= */

const petalContainer =
    document.getElementById("petals");

let petalsEnabled = true;


function createPetal() {

    if (!petalContainer || !petalsEnabled) {
        return;
    }

    const petal =
        document.createElement("span");

    petal.className = "petal";


    const size =
        7 + Math.random() * 12;


    const left =
        Math.random() * 100;


    const duration =
        6 + Math.random() * 8;


    const delay =
        Math.random() * -8;


    petal.style.left =
        `${left}%`;


    petal.style.width =
        `${size}px`;


    petal.style.height =
        `${size * 0.7}px`;


    petal.style.animationDuration =
        `${duration}s`;


    petal.style.animationDelay =
        `${delay}s`;


    petalContainer.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, (duration + 10) * 1000);

}


/* Create starting petals */

if (petalContainer) {

    for (let i = 0; i < 45; i++) {

        createPetal();

    }


    setInterval(() => {

        createPetal();

    }, 350);

}


/* =========================
   PETAL BUTTON
   ========================= */

const petalButton =
    document.getElementById("petalButton");


if (petalButton) {

    petalButton.addEventListener(
        "click",
        () => {

            petalsEnabled =
                !petalsEnabled;


            if (!petalsEnabled) {

                document
                    .querySelectorAll(".petal")
                    .forEach(petal => {
                        petal.remove();
                    });

                petalButton.textContent = "○";

            } else {

                petalButton.textContent = "🌸";

            }

        }
    );

}


/* =========================
   THEME BUTTON
   ========================= */

const themeButton =
    document.getElementById("themeButton");


const savedTheme =
    localStorage.getItem("sakuraTheme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

}


function updateThemeButton() {

    if (!themeButton) {
        return;
    }


    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

}


updateThemeButton();


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );


            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            localStorage.setItem(
                "sakuraTheme",
                isLight
                    ? "light"
                    : "dark"
            );


            updateThemeButton();

        }
    );

}


/* =========================
   COPY PROJECT BUTTONS
   ========================= */

const copyButtons =
    document.querySelectorAll(
        ".copy-button"
    );


copyButtons.forEach(button => {

    button.addEventListener(
        "click",
        async () => {

            const text =
                button.dataset.copy;


            try {

                await navigator.clipboard.writeText(
                    text
                );

                const oldText =
                    button.textContent;


                button.textContent =
                    "Copied! ✓";


                setTimeout(() => {

                    button.textContent =
                        oldText;

                }, 1500);

            } catch (error) {

                button.textContent =
                    "Copy failed";

            }

        }
    );

});


/* =========================
   BACK TO TOP
   ========================= */

const topButton =
    document.getElementById("topButton");


if (topButton) {

    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}