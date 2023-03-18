const exampleTextClasses = document.getElementById("exampleText").classList;

const seriousButton = document.getElementById("seriousButton");
const seriousItalicButton = document.getElementById("seriousItalicButton");
const seriousBoldButton = document.getElementById("seriousBoldButton");
const seriousBoldItalicButton = document.getElementById(
  "seriousBoldItalicButton"
);
const seriousLightButton = document.getElementById("seriousLightButton");
const seriousLightItalicButton = document.getElementById(
  "seriousLightItalicButton"
);

seriousButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.add("serious");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
});

seriousItalicButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.remove("serious");
  exampleTextClasses.add("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
});

seriousBoldButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousButton.classList.remove("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.remove("serious");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.add("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
});

seriousBoldItalicButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousButton.classList.remove("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.remove("serious");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.add("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
});

seriousLightButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousButton.classList.remove("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightItalicButton.classList.remove("selected");
  exampleTextClasses.remove("serious");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.add("seriousLight");
  exampleTextClasses.remove("seriousLightItalic");
});

seriousLightItalicButton.addEventListener("click", function () {
  this.classList.add("selected");
  seriousButton.classList.remove("selected");
  seriousItalicButton.classList.remove("selected");
  seriousBoldButton.classList.remove("selected");
  seriousBoldItalicButton.classList.remove("selected");
  seriousLightButton.classList.remove("selected");
  exampleTextClasses.remove("serious");
  exampleTextClasses.remove("seriousItalic");
  exampleTextClasses.remove("seriousBold");
  exampleTextClasses.remove("seriousBoldItalic");
  exampleTextClasses.remove("seriousLight");
  exampleTextClasses.add("seriousLightItalic");
});
