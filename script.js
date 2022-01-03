import { checkStorage, createListItem, deleteItem, markAsDone } from './modules/data.mjs';
import { listElement } from './modules/printList.mjs'


let myBtn = document.getElementById("myBtn");

let nyInput = document.getElementById("nyInput");

let header = document.querySelectorAll("header");

gsap.from(".header", { duration: 1.2, y: "-100%", ease: "elastic" });
gsap.from("#nyInput", { duration: 1.4, x: "-100vw", ease: "elastic" });
gsap.from("#myBtn", { duration: 1.8, x: "+100vw", ease: "elastic" });

checkStorage();

// låt användarens mata in en ny punkt på listan

myBtn.addEventListener("click", function () {

    createListItem();
    gsap.from(".listItemClass", { duration: 1.5, y: "-100vh", ease: "elastic" });

});


// funktion som ska låta användaren radera given punkt

listElement.addEventListener("click", function (evt) {

    if (evt.target.className === "checkboxClass" || evt.target.className === "done") {
        markAsDone(evt.target.parentElement.id);
    } else {
        let attRadera = evt.target.id;
        deleteItem(attRadera);

        gsap.from(".listItemClass", { duration: 1.5, y: "-100vh", ease: "elastic" });

    };
});
