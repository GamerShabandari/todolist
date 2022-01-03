export let listElement = document.getElementById("sidansLista");

export function skrivUtLista(listToPrint) {

    listElement.innerHTML = "";

    for (let i = 0; i < listToPrint.length; i++) {
        let listPunkt = listToPrint[i].item;



        if (listToPrint[i].isDone == true) {

            let nyListPunkt = document.createElement("li")
            nyListPunkt.innerText = `du måste ${listPunkt}`
            

            let deleteBox = document.createElement("div");
            deleteBox.innerText ="X"
            deleteBox.classList = "deleteBox"
            let nyListPunktCheckbox = document.createElement("div");
            nyListPunktCheckbox.innerText = "✓"
            nyListPunktCheckbox.classList = "done";
            nyListPunkt.append(nyListPunktCheckbox);
            listElement.append(nyListPunkt)
            nyListPunkt.prepend(deleteBox);
            nyListPunkt.setAttribute("id", [i]);
            nyListPunkt.classList = "listItemClass"



        } else {

            let nyListPunkt = document.createElement("li")
            nyListPunkt.innerText = `du måste ${listPunkt}`
            let deleteBox = document.createElement("div");
            deleteBox.classList = "deleteBox"
            deleteBox.innerText ="X"


            let nyListPunktCheckbox = document.createElement("div");
            nyListPunktCheckbox.classList = "checkboxClass";
            nyListPunkt.append(nyListPunktCheckbox);
            listElement.append(nyListPunkt)
            nyListPunkt.prepend(deleteBox);
            nyListPunkt.setAttribute("id", [i]);
            nyListPunkt.classList = "listItemClass"            

        };
    }
};