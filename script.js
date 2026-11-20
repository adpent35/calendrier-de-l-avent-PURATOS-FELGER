const calendar = document.getElementById("calendar");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

const closeBtn = document.getElementById("close");

const gear = document.getElementById("gear");

const adminPanel = document.getElementById("adminPanel");

const daySelect = document.getElementById("daySelect");

for(let i=1;i<=24;i++){

    const option=document.createElement("option");

    option.value=i;
    option.textContent="Jour "+i;

    daySelect.appendChild(option);
}
