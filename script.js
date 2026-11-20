const calendar = document.getElementById("calendar");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

const closeBtn = document.getElementById("close");

const gear = document.getElementById("gear");

const adminPanel = document.getElementById("adminPanel");

const daySelect = document.getElementById("daySelect");

for (let i = 1; i <= 24; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = "Jour " + i;
    daySelect.appendChild(option);
}

gear.addEventListener("click", () => {

    const code = prompt("Code Administrateur");

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

for (let i = 1; i <= 24; i++) {

    const box = document.createElement("div");

    box.className = "case";

    const today = new Date();

    if (today.getMonth() === 11 && today.getDate() >= i) {

        box.textContent = i;

        box.addEventListener("click", () => {

            const photo = localStorage.getItem("photo_" + i);

            const texte = localStorage.getItem("message_" + i);

            if (photo) {

                modalImage.src = photo;

                modalText.textContent = texte || "";

                modal.style.display = "flex";

            } else {

                alert("Aucune photo enregistrée pour ce jour");

            }

        });

    } else {

        box.textContent = "🔒";

        box.classList.add("locked");

    }

    calendar.appendChild(box);

}

function saveDay() {

    const day = document.getElementById("daySelect").value;

    const file = document.getElementById("photoInput").files[0];

    const message = document.getElementById("messageInput").value;

    if (!file) {

        alert("Choisis une photo");

        return;

    }

    const reader = new FileReader();

    reader.onload = function (e) {

        localStorage.setItem(
            "photo_" + day,
            e.target.result
        );

        localStorage.setItem(
            "message_" + day,
            message
        );

        alert("Jour " + day + " enregistré avec succès");

    };

    reader.readAsDataURL(file);

}

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});
