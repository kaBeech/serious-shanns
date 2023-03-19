const mainClasses = document.getElementById("main").classList;
const exampleText = document.getElementById("exampleText");
const exampleTextClasses = exampleText.classList;
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
const newExampleTextButton = document.getElementById("newExampleTextButton");
const newExampleText = document.getElementById("newExampleText");

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
  mainClasses.add("serious");
  mainClasses.remove("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.remove("seriousLightItalic");
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
  mainClasses.remove("serious");
  mainClasses.add("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.remove("seriousLightItalic");
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
  mainClasses.remove("serious");
  mainClasses.remove("seriousItalic");
  mainClasses.add("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.remove("seriousLightItalic");
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
  mainClasses.remove("serious");
  mainClasses.remove("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.add("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.remove("seriousLightItalic");
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
  mainClasses.remove("serious");
  mainClasses.remove("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.add("seriousLight");
  mainClasses.remove("seriousLightItalic");
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
  mainClasses.remove("serious");
  mainClasses.remove("seriousItalic");
  mainClasses.remove("seriousBold");
  mainClasses.remove("seriousBoldItalic");
  mainClasses.remove("seriousLight");
  mainClasses.add("seriousLightItalic");
});

newExampleTextButton.addEventListener("click", function () {
  exampleText.setHTML(newExampleText.value);
});
