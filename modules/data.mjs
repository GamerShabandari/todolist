
//funktion som kollar localstorage för att se om det finns lista sedan innan

import { skrivUtLista } from "./printList.mjs";

export function checkStorage() {


    let minListaSerialized = localStorage.getItem("minLista");

    if (minListaSerialized) {

        let minListaDeSerialized = JSON.parse(localStorage.getItem("minLista"));
        skrivUtLista(minListaDeSerialized);

    }

};

// låt användarens mata in en ny punkt på listan

export function createListItem() {

    let usersInput = { item: nyInput.value, isDone: false };

    let minListaSerialized = localStorage.getItem("minLista");

    if (minListaSerialized) {

        let minListaDeSerialized = JSON.parse(localStorage.getItem("minLista"));
        minListaDeSerialized.push(usersInput);
        localStorage.setItem("minLista", JSON.stringify(minListaDeSerialized));

        nyInput.value = "";

        checkStorage();

    } else {

        let minLista = [];
        minLista.push(usersInput);
        localStorage.setItem("minLista", JSON.stringify(minLista));

        nyInput.value = "";

        checkStorage();
    };

};


export function deleteItem(attradera) {

    let attRadera = attradera;

    let minListaDeSerialized = JSON.parse(localStorage.getItem("minLista"));

    minListaDeSerialized.splice(attRadera, 1);
    localStorage.setItem("minLista", JSON.stringify(minListaDeSerialized));

    checkStorage();

};

export function markAsDone(toMarkDone) {

    let minListaDeSerialized = JSON.parse(localStorage.getItem("minLista"));

    let doneItem = minListaDeSerialized[toMarkDone];

    if (doneItem.isDone == false) {

        minListaDeSerialized[toMarkDone].isDone = true;

    } else if (doneItem.isDone == true) {

        minListaDeSerialized[toMarkDone].isDone = false;

    }

    localStorage.setItem("minLista", JSON.stringify(minListaDeSerialized));

    checkStorage();

};