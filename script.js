// toggles typefacesnav
function toggleTypefaces() {
  var nav = document.getElementById("typefacesnav");
  var overlay = document.getElementById("overlay");

  if (nav.classList.contains("visible")) {
    overlay.classList.remove("visible");
    nav.classList.remove("visible");
  } else {
    nav.classList.add("visible");
    overlay.classList.add("visible");
  }
}

// blurs background when typefacesnav is open
document.getElementById("overlay").addEventListener("click", function () {
  var nav = document.getElementById("typefacesnav");
  var overlay = document.getElementById("overlay");

  nav.classList.remove("visible");
  overlay.classList.remove("visible");
});

// animated background gradient
var granimInstance = new Granim({
  element: '#canvas-interactive',
  name: 'interactive-gradient',
  elToSetClassOn: '.canvas-interactive-wrapper',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 500,
  states: {
    "default-state": {
      gradients: [
        ['#1656a4', '#1656a4'],
        ['#1656a4', '#04101E'],
        ['#744A15', '#1656a4'],
        ['#1656a4', '#877E3B'],
        ['#C6ABBD', '#1656a4'],
      ],
      transitionSpeed: 8000
    },
    "violet-state": {
      gradients: [
        ['#9D50BB', '#6E48AA'],
        ['#4776E6', '#8E54E9']
      ],
      transitionSpeed: 2000
    },
    "orange-state": {
      gradients: [['#FF4E50', '#F9D423']],
      loop: false
    }
  }
});

// animated background gradient jQuery
$('#default-state-cta').on('click', function (event) {
  event.preventDefault();
  granimInstance.changeState('default-state');
  setClass('#default-state-cta')
});
$('#violet-state-cta').on('click', function (event) {
  event.preventDefault();
  granimInstance.changeState('violet-state');
  setClass('#violet-state-cta')
});
$('#orange-state-cta').on('click', function (event) {
  event.preventDefault();
  granimInstance.changeState('orange-state');
  setClass('#orange-state-cta')
});

function setClass(element) {
  $('.canvas-interactive-wrapper a').removeClass('active');
  $(element).addClass('active');
};

// function that toggles typefacesnav and shows typefacedetails
function handleTypefaceClick() {
  toggleTypefaces();
  applyGlacierDetails();
}

// function that defines showtypefacedetails
function applyGlacierDetails() {
  var landingbg = document.getElementById('landingbg'); 
  var GlacierDetails = document.getElementById('GlacierDetails');

  landingbg.style.filter = 'blur(5px)';

  GlacierDetails.style.display = 'block'; 
}

// type tester
var currentVariable = document.querySelector('#current-PEAK');
function setVariable(newVariable) {
    console.log(newVariable);
    currentVariable.innerText = newVariable;
    root.style.setProperty('--PEAK', newVariable);
}

var currentFontSize = document.querySelector('#current-font-size');
function setFontSize(newFontSize) {
    console.log(newFontSize);
    currentFontSize.innerText = newFontSize;
    root.style.setProperty('--font-size', newFontSize + "px");
}