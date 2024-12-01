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