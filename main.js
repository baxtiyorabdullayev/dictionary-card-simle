"use strict";

// input section
let inputSection = document.querySelector(".input-section");

let form = document.createElement("form");
form.classList.add("form");

let inputDictionary = document.createElement("input");
inputDictionary.classList.add("input-dictionary");
inputDictionary.type = "text";
inputDictionary.autofocus = "autofocus";
inputDictionary.placeholder = "Dictionry...";

let inputTranslate = document.createElement("input");
inputTranslate.classList.add("input-translate");
inputTranslate.type = "text";
inputTranslate.placeholder = "Translate...";

let add = document.createElement("input");
add.classList.add("input-add");
add.type = "submit";
add.value = "Add dictionary";

form.appendChild(inputDictionary);
form.appendChild(inputTranslate);
form.appendChild(add);
inputSection.appendChild(form);

// output section
let outputDictionary = document.querySelector("dictionary");
let outputTranslate = document.querySelector("translate");
let newWords = [];

// add  inputed words to arry and show on cards
function addDictionary(e) {
  //adding words to arry
  e.preventDefault();
  let newWord = {
    dictionary: inputDictionary.value,
    translate: inputTranslate.value,
  };
  inputDictionary.value = "";
  inputTranslate.value = "";
  newWords.push(newWord);
  localStorage.setItem("Lug'atlar", JSON.stringify(newWords));

  // shuffle cards

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  shuffle(newWords);

  // showing words on cards
  let card;
  let translate;
  let dictionary;
  let cards = document.querySelector(".cards");
  let getDictionaries = JSON.parse(localStorage.getItem("Lug'atlar"));
  getDictionaries.map((element) => {
    card = document.createElement("div");
    card.classList.add("card");
    //dictionary side
    dictionary = document.createElement("div");
    dictionary.classList.add("dictionary");

    // translate side
    translate = document.createElement("div");
    translate.classList.add("translate");

    dictionary.textContent = element.dictionary;
    translate.textContent = element.translate;
    card.appendChild(translate);
    card.appendChild(dictionary);
  });
  cards.appendChild(card);
  console.log(getDictionaries);
}
add.addEventListener("click", addDictionary);

///----------------------------------------
