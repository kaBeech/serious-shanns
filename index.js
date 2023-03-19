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

const seriousStyles = [
  "seriousOriginal",
  "seriousItalic",
  "seriousBold",
  "seriousBoldItalic",
  "seriousLight",
  "seriousLightItalic",
];

const enterSeriousMode = () => {
  mainClasses.add("serious");
  for (seriousButton of seriousButtons) {
    seriousButton.classList.add("serious");
  }
};

const exitSeriousMode = () => {
  mainClasses.remove("serious");
  for (seriousButton of seriousButtons) {
    seriousButton.classList.remove("serious");
  }
};

const clearClasses = () => {
  for (seriousStyle of seriousStyles) {
    exampleTextClasses.remove(seriousStyle);
    mainClasses.remove(seriousStyle);
  }
  for (seriousButton of seriousButtons) {
    seriousButton.classList.remove("selected");
  }
};

const clearClassesAndSelectThisButton = (button) => {
  clearClasses();
  button.classList.add("selected");
};

entirePageRadio.addEventListener("click", function () {
  if (this.checked) {
    enterSeriousMode();
  } else {
    exitSeriousMode();
  }
});

exampleTextOnlyRadio.addEventListener("click", function () {
  if (this.checked) {
    exitSeriousMode();
  } else {
    enterSeriousMode();
  }
});

seriousOriginalButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClasses.add("seriousOriginal");
  mainClasses.add("seriousOriginal");
});

seriousItalicButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClasses.add("seriousItalic");
  mainClasses.add("seriousItalic");
});

seriousBoldButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClasses.add("seriousBold");
  mainClasses.add("seriousBold");
});

seriousBoldItalicButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClasses.add("seriousBoldItalic");
  mainClasses.add("seriousBoldItalic");
});

seriousLightButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClasses.add("seriousLight");
  mainClasses.add("seriousLight");
});

seriousLightItalicButton.addEventListener("click", function () {
  clearClassesAndSelectThisButton(this);
  exampleTextClasses.add("seriousLightItalic");
  mainClasses.add("seriousLightItalic");
});

newExampleTextButton.addEventListener("click", function () {
  exampleText.setHTML(newExampleText.value);
});
