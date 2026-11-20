const calendar = document.getElementById("calendar");

for(let i=1;i<=24;i++){

    const jour = document.createElement("div");

    jour.className = "case";
    jour.textContent = i;

    jour.onclick = () => {
        alert("Photo du jour " + i);
    };

    calendar.appendChild(jour);
}
