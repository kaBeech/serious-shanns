const exampleText = document.getElementById("exampleText");
const exampleTextClassList = exampleText.classList;
const mainClassList = document.getElementById("main").classList;
const entirePageRadio = document.getElementById("entirePageRadio");
const exampleTextOnlyRadio = document.getElementById("exampleTextOnlyRadio");
const seriousOriginalButton = document.getElementById("seriousOriginalButton");
const seriousItalicButton = document.getElementById("seriousItalicButton");
const seriousBoldButton = document.getElementById("seriousBoldButton");
const seriousBoldItalicButton = document.getElementById(
  "seriousBoldItalicButton"
);
const seriousLightButton = document.getElementById("seriousLightButton");
const seriousLightItalicButton = document.getElementById(
  "seriousLightItalicButton"
);
const newExampleTextInput = document.getElementById("newExampleTextInput");
const newExampleTextButton = document.getElementById("newExampleTextButton");

const seriousElements = [
  seriousOriginalButton,
  seriousItalicButton,
  seriousBoldButton,
  seriousBoldItalicButton,
  seriousLightButton,
  seriousLightItalicButton,
  newExampleTextButton,
  newExampleTextInput,
];

const seriousStyles = [
  "seriousOriginal",
  "seriousItalic",
  "seriousBold",
  "seriousBoldItalic",
  "seriousLight",
  "seriousLightItalic",
];

const clearClasses = () => {
  for (seriousStyle of seriousStyles) {
    exampleTextClassList.remove(seriousStyle);
    mainClassList.remove(seriousStyle);
  }
  for (seriousElement of seriousElements) {
    seriousElement.classList.remove("selected");
  }
};

const clearClassesAndSelectThisButton = (button) => {
  clearClasses();
  button.classList.add("selected");
};

entirePageRadio.addEventListener("click", () => {
  mainClassList.add("serious");
  for (seriousElement of seriousElements) {
    seriousElement.classList.add("serious");
  }
});

exampleTextOnlyRadio.addEventListener("click", () => {
  mainClassList.remove("serious");
  for (seriousElement of seriousElements) {
    seriousElement.classList.remove("serious");
  }
});

seriousOriginalButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClassList.add("seriousOriginal");
  mainClassList.add("seriousOriginal");
});

seriousItalicButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClassList.add("seriousItalic");
  mainClassList.add("seriousItalic");
});

seriousBoldButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClassList.add("seriousBold");
  mainClassList.add("seriousBold");
});

seriousBoldItalicButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClassList.add("seriousBoldItalic");
  mainClassList.add("seriousBoldItalic");
});

seriousLightButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClassList.add("seriousLight");
  mainClassList.add("seriousLight");
});

seriousLightItalicButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClassList.add("seriousLightItalic");
  mainClassList.add("seriousLightItalic");
});

newExampleTextInput.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    exampleText.textContent = newExampleTextInput.value;
  }
});

newExampleTextButton.addEventListener("click", () => {
  exampleText.textContent = newExampleTextInput.value;
});
