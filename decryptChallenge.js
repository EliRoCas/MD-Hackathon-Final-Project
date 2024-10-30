// Don't exist: g, k, w, x
function findCharacter(encryptedMessage) {
  const hints = {
    "?": "a",
    "[": "e",
    "\\": "i",
    "~": "o",
    "+": "u",
    "¬": "ó",
    "()": " ",
    "%": "b",
    "`": "c",
    "¡": "d",
    ";": "f",
    "!": "j",
    "-": "h",
    "/": "l",
    "^": "m",
    "]": "n",
    "*": "p",
    "}": "q",
    $: "r",
    "{": "s",
    "=": "t",
    "#": "v",
    "¿": "y",
    "__": "z",
  };

  encryptedMessage = encryptedMessage.replace(/\(\)/g, " ").replace(/__/g, "z");

  let partialDecryption = encryptedMessage
    .split("")
    .map((letter) => {
      return hints[letter] || letter;
    })
    .join("");
  return partialDecryption;
}

const encryptedMessage =
  "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";
const decryptedMessage = findCharacter(encryptedMessage);
// console.log(decryptedMessage);

function updateParagraph() {
  const paragraph = document.getElementById("decryptedMessage");
  paragraph.textContent = decryptedMessage;
}
