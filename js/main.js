jQuery(document).ready(function($) {
  $(".scroll").click(function(event){
    event.preventDefault();

$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
  });
});

//end-smooth-scrolling
//smooth-scrolling-of-move-up
$(document).ready(function() {
/*
var defaults = {
  containerID: 'toTop', // fading element id
  containerHoverID: 'toTopHover', // fading element hover id
  scrollSpeed: 1200,
  easingType: 'linear'
};
*/

$().UItoTop({ easingType: 'easeOutQuart' });

});
//smooth-scrolling-of-move-up
//Scrolling Nav JavaScript

//fixed-scroll-nav-js
//bth hover effect

$(function() {
$('.btn-6')
.on('mouseenter', function(e) {
var parentOffset = $(this).offset(),
relX = e.pageX - parentOffset.left,
relY = e.pageY - parentOffset.top;
$(this).find('span').css({
top: relY,
left: relX
})
})
.on('mouseout', function(e) {
var parentOffset = $(this).offset(),
relX = e.pageX - parentOffset.left,
relY = e.pageY - parentOffset.top;
$(this).find('.btn-6 span').css({
top: relY,
left: relX
})
});
});

//init Jarallax

//FlexSlider


$(window).load(function(){
$('.flexslider').flexslider({
animation: "slide",
start: function(slider){
  $('body').removeClass('loading');
}
});
});

<!-- //End-FlexSlider -->

$(function() {
$('.view-seventh a').Chocolat();
});

<!-- //pop-up-script -->
