console.log("The house always wins!");

let styleInput = document.getElementById("cardStyle");
let cardIDInput = document.getElementById("cardID");
let cardList = document.getElementsByClassName("cards");

const setCard = () => {
    document.getElementById(cardIDInput.value).style.backgroundColor=styleInput.value;
}

const clearCards = () => {
    for (i=0; i<cardList.length; i++) {
        cardList[i].style.backgroundColor="white";
    }
}
