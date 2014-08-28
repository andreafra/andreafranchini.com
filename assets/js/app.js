$('header, section').css("height", window.innerHeight);
$('header, section, footer').css("width", window.innerWidth);

var lastScrollTop = 0;

$(window).scroll(function(event){
   var scrollTopNow = $(this).scrollTop();
   if (scrollTopNow > lastScrollTop){
       //scroll down
       
   } else {
	   //scroll up
	  
   }
   lastScrollTop = st;
});