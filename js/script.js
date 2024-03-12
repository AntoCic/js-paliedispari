const wordE = document.getElementById("word");
const word_check = document.getElementById("word_check");
const info_word = document.getElementById("info_word");

const radio_pari = document.getElementById("radio_pari");
const radio_dispari = document.getElementById("radio_dispari");
const option_check = document.getElementById("option_check");
const info_pari_dispari = document.getElementById("info_pari_dispari");

word_check.addEventListener("click", function () {
  if (checkPalidroma(wordE.value)) {
    info_word.textContent = `La parola ${wordE.value} è palidroma`;
  } else {
    info_word.textContent = `La parola ${wordE.value} non è palidroma`;
  }
  wordE.value = "";
});

function checkPalidroma(word) {
  const wordLowerCase = word.toLowerCase();
  const wordArr = wordLowerCase.split("");
  let reverseWord = "";
  for (let index = wordArr.length - 1; index >= 0; index--) {
    reverseWord += wordArr[index];
  }
  if (wordLowerCase === reverseWord) {
    return true;
  } else {
    return false;
  }
}

option_check.addEventListener("click", function () {
  let choice;

  if (radio_pari.checked) {
    choice = radio_pari.value;
  } else {
    choice = radio_dispari.value;
  }

  const randomN = getRandomNum(5);
  console.log(randomN);
  if (isEven(randomN)) {
    if (choice === "pari") {
      info_pari_dispari.textContent = "hai indovinato";
    } else {
      info_pari_dispari.textContent = "non hai indovinato";
    }
  } else {
    if (choice === "dispari") {
      info_pari_dispari.textContent = "hai indovinato";
    } else {
      info_pari_dispari.textContent = "non hai indovinato";
    }
  }
});

function getRandomNum(max) {
  const n = Math.round(Math.random() * (max-1)) + 1;
  return n;
}
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
