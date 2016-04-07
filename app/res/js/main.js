document.addEventListener("DOMContentLoaded", function() {
  var loader = document.getElementById("loading_page");
  loader.classList.add("hidden-loader");
  
  var transitionEvent = whichTransitionEvent();
  transitionEvent && loader.addEventListener(transitionEvent, function() {
    loader.classList.add("hidden");
    console.log('Transition complete!  This is the callback, no library needed!');
  })
  
  var sections = document.getElementById("section_container").children;
  var sectionsPosition = ["0%", "-100%", "-200%"];
  var canScroll = false;
  
  if(window.getComputedStyle(document.getElementById("section_dummy")).getPropertyValue('display').cssText !== "none") { // Then on a desktop-size
      canScroll = true
    } else {
      canScroll = false
    }
  
  function scrollContent(howMuch) {
    for(i = 0; i < sections.length; i++) {
      TweenLite.to(sections[i], 0.5, {x:sectionsPosition[howMuch]});
    }
  }
  
  var about = document.getElementById("section_about");
  var portfolio = document.getElementById("section_portfolio");
  var contacts = document.getElementById("section_contacts");

  
  var aboutBtn = document.getElementById("about_link");
  var portfolioBtn = document.getElementById("portfolio_link");
  var contactsBtn = document.getElementById("contacts_link");
  
  var aboutContainer = document.getElementById("about_container");
  var portfolioContainer = document.getElementById("portfolio_container");
  
  var portfolioIcon = document.getElementById("portfolio_icon");
  var contactsIcon = document.getElementById("contacts_icon");
  
  function aboutScroll(_canScroll) {
    if(_canScroll) {
      scrollContent(0);
      
      about.classList.remove("scrolled-left");
      aboutContainer.classList.add("hidden");
      
      portfolioIcon.innerHTML = "chevron_right";
      
      console.log("Clicked on About link");
    }
  }
  
  function portfolioScroll(_canScroll) {
    if(_canScroll) {
      scrollContent(1);
      
      about.classList.add("scrolled-left");
      portfolio.classList.remove("scrolled-left");
      aboutContainer.classList.remove("hidden");
      portfolioContainer.classList.remove("intro-translate");
      
      portfolioIcon.innerHTML = "art_track";
      contactsIcon.innerHTML = "chevron_right";
      
      console.log("Clicked on Portfolio link!");
    }
  }
  
  function contactsScroll(_canScroll) {
    if(_canScroll) {
      scrollContent(2);
      
      portfolio.classList.add("scrolled-left");
      portfolioContainer.classList.add("intro-translate");
      
      portfolioIcon.innerHTML = "chevron_left";
      contactsIcon.innerHTML = "email";
      
      console.log("Clicked on Contacts link!");
    }
  }
  
  aboutBtn.addEventListener("click", function() {
    aboutScroll(canScroll)
  })
  
  portfolioBtn.addEventListener("click", function() {
    portfolioScroll(canScroll)
  })
  
  contactsBtn.addEventListener("click", function() {
    contactsScroll(canScroll)
  })
  
  window.addEventListener("resize", function() {
    if(window.getComputedStyle(document.getElementById("section_dummy")).getPropertyCSSValue('display').cssText !== "none") { // Then on a desktop-size
      canScroll = true
    } else {
      canScroll = false
    }
  })
})

/* From Modernizr */
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'animation':'animationend',
      'OAnimation':'oAnimationEnd',
      'MozAnimation':'animationend',
      'WebkitAnimation':'webkitAnimationEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}