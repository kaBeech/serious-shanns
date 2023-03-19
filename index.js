const mainClasses = document.getElementById("main").classList;
const exampleText = document.getElementById("exampleText");
const exampleTextClasses = exampleText.classList;
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
const newExampleTextButton = document.getElementById("newExampleTextButton");
const newExampleText = document.getElementById("newExampleText");

const seriousButtons = [
  seriousOriginalButton,
  seriousItalicButton,
  seriousBoldButton,
  seriousBoldItalicButton,
  seriousLightButton,
  seriousLightItalicButton,
];

entirePageRadio.addEventListener("click", function () {
  if (this.checked) {
    mainClasses.add("serious");
    for (seriousButton of seriousButtons) {
      seriousButton.classList.add("serious");
    }
  } else {
    mainClasses.remove("serious");
    for (seriousButton of seriousButtons) {
      seriousButton.classList.remove("serious");
    }
  }
});

exampleTextOnlyRadio.addEventListener("click", function () {
  if (this.checked) {
    mainClasses.remove("serious");
    for (seriousButton of seriousButtons) {
      seriousButton.classList.remove("serious");
    }
  } else {
    mainClasses.add("serious");
    for (seriousButton of seriousButtons) {
      seriousButton.classList.add("serious");
    }
  }
});

seriousOriginalButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.add("seriousOriginal");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
  mainClasses.add("seriousOriginal");
  mainClasses.remove("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.remove("seriousLightItalic");
});

seriousItalicButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousOriginalButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.remove("seriousOriginal");
  exampleTextClasses.add("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
  mainClasses.remove("seriousOriginal");
  mainClasses.add("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.remove("seriousLightItalic");
});

seriousBoldButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousOriginalButton.classList.remove("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.remove("seriousOriginal");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.add("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
  mainClasses.remove("seriousOriginal");
  mainClasses.remove("seriousItalic");
  mainClasses.add("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.remove("seriousLightItalic");
});

seriousBoldItalicButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousOriginalButton.classList.remove("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.remove("seriousOriginal");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.add("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
  mainClasses.remove("seriousOriginal");
  mainClasses.remove("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.add("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.remove("seriousLightItalic");
});

seriousLightButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousOriginalButton.classList.remove("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.remove("seriousOriginal");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.add("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
  mainClasses.remove("seriousOriginal");
  mainClasses.remove("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.add("seriousLight");
  mainClasses.remove("seriousLightItalic");
});

seriousLightItalicButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousOriginalButton.classList.remove("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  exampleTextClasses.remove("seriousOriginal");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.add("seriousLightItalic");
  mainClasses.remove("seriousOriginal");
  mainClasses.remove("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.add("seriousLightItalic");
});

newExampleTextButton.addEventListener("click", function () {
  exampleText.setHTML(newExampleText.value);
});
