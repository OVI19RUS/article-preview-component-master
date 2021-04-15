$(document).ready(function(){
$('.PopUp').hide();
})

$('.Share-icon').click(function(){
$('.PopUp').toggle();
$('.Share-icon').toggleClass('Share-icon-popup');
})
