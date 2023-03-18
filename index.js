const exampleTextClasses = document.getElementById("exampleText").classList;

const seriousButton = document
  .getElementById("seriousButton")
  .addEventListener("click", function () {
    exampleTextClasses.add("serious");
    exampleTextClasses.remove("seriousItalic");
    exampleTextClasses.remove("seriousBold");
    exampleTextClasses.remove("seriousBoldItalic");
    exampleTextClasses.remove("seriousLight");
    exampleTextClasses.remove("seriousLightItalic");
  });
const seriousItalicButton = document
  .getElementById("seriousItalicButton")
  .addEventListener("click", function () {
    exampleTextClasses.remove("serious");
    exampleTextClasses.add("seriousItalic");
    exampleTextClasses.remove("seriousBold");
    exampleTextClasses.remove("seriousBoldItalic");
    exampleTextClasses.remove("seriousLight");
    exampleTextClasses.remove("seriousLightItalic");
  });
const seriousBoldButton = document
  .getElementById("seriousBoldButton")
  .addEventListener("click", function () {
    exampleTextClasses.remove("serious");
    exampleTextClasses.remove("seriousItalic");
    exampleTextClasses.add("seriousBold");
    exampleTextClasses.remove("seriousBoldItalic");
    exampleTextClasses.remove("seriousLight");
    exampleTextClasses.remove("seriousLightItalic");
  });
const seriousBoldItalicButton = document
  .getElementById("seriousBoldItalicButton")
  .addEventListener("click", function () {
    exampleTextClasses.remove("serious");
    exampleTextClasses.remove("seriousItalic");
    exampleTextClasses.remove("seriousBold");
    exampleTextClasses.add("seriousBoldItalic");
    exampleTextClasses.remove("seriousLight");
    exampleTextClasses.remove("seriousLightItalic");
  });
const seriousLightButton = document
  .getElementById("seriousLightButton")
  .addEventListener("click", function () {
    exampleTextClasses.remove("serious");
    exampleTextClasses.remove("seriousItalic");
    exampleTextClasses.remove("seriousBold");
    exampleTextClasses.remove("seriousBoldItalic");
    exampleTextClasses.add("seriousLight");
    exampleTextClasses.remove("seriousLightItalic");
  });
const seriousLightItalicButton = document
  .getElementById("seriousLightItalicButton")
  .addEventListener("click", function () {
    exampleTextClasses.remove("serious");
    exampleTextClasses.remove("seriousItalic");
    exampleTextClasses.remove("seriousBold");
    exampleTextClasses.remove("seriousBoldItalic");
    exampleTextClasses.remove("seriousLight");
    exampleTextClasses.add("seriousLightItalic");
  });
