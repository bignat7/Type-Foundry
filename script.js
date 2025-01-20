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

// hides typefacesnav and shows typefacedetails
function handleTypefaceClick(typefaceName) {
  toggleTypefaces(); // Toggle visibility (if necessary)
  applyTypefaceDetails(typefaceName); // Apply details for the selected typeface
}

// ChatGPT helped me apply this function to any typeface instead of just a specific one
function applyTypefaceDetails(typefaceName) {
  var landingbg = document.getElementById('landingbg');
  
  // Get all elements with the class 'typefaceDetails' and hide them
  var allTypefaceDetails = document.querySelectorAll('.typefacedetails');
  allTypefaceDetails.forEach(function(detail) {
    detail.style.display = 'none'; // Hide all typeface details
  });

  var landingtext = document.querySelectorAll('.glacier-secret-container');
  landingtext.forEach(function(label) {
    label.style.display = 'none'; // Hide all typeface details
  });

  window.scrollTo(0, 0);
  
  // Get the details section for the clicked typeface and display it
  var typefaceDetails = document.getElementById(typefaceName + 'Details');
  if (typefaceDetails) {
    landingbg.style.filter = 'blur(10px)'; // Apply the blur to the background
    typefaceDetails.style.display = 'block'; // Show the new typeface details
  }
}

// Glacier type tester
var root = document.querySelector('html');
var currentSTAR = document.querySelector('#current-STAR');
var currentHEIG = document.querySelector('#current-HEIG');
var currentGlacierFontSize = document.querySelector('#current-glacier-font-size');

function setSTAR(newSTAR) {
    currentSTAR.innerText = newSTAR;
    root.style.setProperty('--STAR', newSTAR);
}
function setGlacierFontSize(newGlacierFontSize) {
    currentGlacierFontSize.innerText = newGlacierFontSize;
    root.style.setProperty('--glacier-font-size', newGlacierFontSize + 'px');
}
function setHEIG(newHEIG) {
  currentHEIG.innerText = newHEIG;
  root.style.setProperty('--HEIG', newHEIG);
}

// Shard type tester
var root = document.querySelector('html');
var currentCURV = document.querySelector('#current-CURV');
var currentShardFontSize = document.querySelector('#current-shard-font-size');

function setCURV(newCURV) {
    currentCURV.innerText = newCURV;
    root.style.setProperty('--CURV', newCURV);
}
function setShardFontSize(newShardFontSize) {
    currentShardFontSize.innerText = newShardFontSize;
    root.style.setProperty('--shard-font-size', newShardFontSize + 'px');
}

// Altitude type tester
var root = document.querySelector('html');
var currentAERO = document.querySelector('#current-AERO');
var currentAltitudeFontSize = document.querySelector('#current-altitude-font-size');

function setAERO(newAERO) {
    currentAERO.innerText = newAERO;
    root.style.setProperty('--AERO', newAERO);
}
function setAltitudeFontSize(newAltitudeFontSize) {
    currentAltitudeFontSize.innerText = newAltitudeFontSize;
    root.style.setProperty('--altitude-font-size', newAltitudeFontSize + 'px');
}

// Sleet type tester
var root = document.querySelector('html');
var currentSLNT = document.querySelector('#current-SLNT');
var currentSHAP = document.querySelector('#current-SHAP');
var currentSleetFontSize = document.querySelector('#current-sleet-font-size');

function setSLNT(newSLNT) {
    currentSLNT.innerText = newSLNT;
    root.style.setProperty('--slnt', newSLNT);
}
function setSleetFontSize(newSleetFontSize) {
    currentSleetFontSize.innerText = newSleetFontSize;
    root.style.setProperty('--sleet-font-size', newSleetFontSize + 'px');
}
function setSHAP(newSHAP) {
  currentSHAP.innerText = newSHAP;
  root.style.setProperty('--SHAP', newSHAP);
}