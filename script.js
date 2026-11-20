const calendar = document.getElementById("calendar");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

const closeBtn = document.getElementById("close");

const gear = document.getElementById("gear");
const adminPanel = document.getElementById("adminPanel");

const testDay = document.getElementById("testDay");

const imageExtensions = {
    1: "webp",
    2: "jpg",
    3: "webp",
    4: "jpg",
    5: "jpg",
    6: "jpg",
    7: "jpg",
    8: "jpg",
    9: "jpg",
    10: "jpg",
    11: "webp",
    12: "jpeg",
    13: "jpg",
    14: "jpeg",
    15: "jpg",
    16: "jpeg",
    17: "jpg",
    18: "jpg",
    19: "webp",
    20: "jpg",
    21: "jpg",
    22: "jpg",
    23: "jpg",
    24: "jpg"
};

// Remplissage de la liste des jours du mode test
for (let i = 1; i <= 24; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = "Jour " + i;
    testDay.appendChild(option);
}

// Bouton administration
gear.addEventListener("click", () => {

    const code = prompt("Code administrateur");

    if (code === "0308") {

        if (adminPanel.style.display === "block") {
            adminPanel.style.display = "none";
        } else {
            adminPanel.style.display = "block";
        }

    } else {
        alert("Code incorrect");
    }

});

// Création des 24 cases
for (let i = 1; i <= 24; i++) {

    const box = document.createElement("div");
    box.className = "case";

    const today = new Date();

    const jourTest =
        parseInt(localStorage.getItem("testDay")) || 0;

    const accessible =
        jourTest >= i ||
        (today.getMonth() === 11 && today.getDate() >= i) ||
        today.getMonth() === 0;

    if (accessible) {

        box.textContent = i;

        box.addEventListener("click", () => {

            const extension = imageExtensions[i];

            modalImage.src = `images/${i}.${extension}`;

            modalText.textContent = "";

            modal.style.display = "flex";

        });

    } else {

        box.textContent = "🔒";
        box.classList.add("locked");

    }

    calendar.appendChild(box);
}

// Déverrouillage du mode test
function setTestDay() {

    const jour =
        document.getElementById("testDay").value;

    localStorage.setItem("testDay", jour);

    alert(
        "Mode test activé jusqu'au jour " + jour
    );

    location.reload();
}

// Retour au mode normal
function resetTestDay() {

    localStorage.removeItem("testDay");

    alert("Mode normal réactivé");

    location.reload();
}

// Fermeture de la fenêtre photo
closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});
