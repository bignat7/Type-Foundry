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
  
  document.getElementById("overlay").addEventListener("click", function () {
    var nav = document.getElementById("typefacesnav");
    var overlay = document.getElementById("overlay");
  
    nav.classList.remove("visible");
    overlay.classList.remove("visible");
  });

  function showTypefaceDetails(typefaceName) {
    var typefaceDetails = document.getElementById("typefaceDetails");
    var typefaceTitle = document.getElementById("typefaceTitle");
    var typefaceDescription = document.getElementById("typefaceDescription");
  
    // Set the title and description based on the clicked typeface
    typefaceTitle.textContent = typefaceName;
    typefaceDescription.textContent = "This is filler text for the " + typefaceName + " typeface. More detailed information can be added here.";
  
    // Show the typeface details section
    typefaceDetails.style.display = "flex";
  }
  
  // Function to close the typeface details section
  function closeTypefaceDetails() {
    var typefaceDetails = document.getElementById("typefaceDetails");
    
    // Hide the typeface details section
    typefaceDetails.style.display = "none";
  }

  var granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.canvas-interactive-wrapper',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states : {
        "default-state": {
            gradients: [
                ['#1656a4', '#04101E'],
                ['#744A15', '#1656a4'],
                ['#1656a4', '#877E3B'],
                ['#C6ABBD', '#1656a4'],
                ['#1656a4', '#1656a4'],
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
            gradients: [ ['#FF4E50', '#F9D423'] ],
            loop: false
        }
    }
});

// With jQuery
$('#default-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('default-state');
    setClass('#default-state-cta')
});
$('#violet-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('violet-state');
    setClass('#violet-state-cta')
});
$('#orange-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('orange-state');
    setClass('#orange-state-cta')
});

function setClass(element) {
    $('.canvas-interactive-wrapper a').removeClass('active');
    $(element).addClass('active');
};

window.addEventListener('load', function () {
  document.querySelector('.fade-in-bg').classList.add('visible');
});