import $ from 'jquery'
$(document).ready(() =>{
    $("a.scroll").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
    });
	
	// Input mask
	if( $('.phone').length > 0 ) {
	$(".phone").inputmask({
	  mask: "8 999 999 99 99",
	  placeholder: " ",
	  showMaskOnHover: true,
	  onincomplete: function(){ 
		$(this).closest("form").addClass('error-phone'); 
		$(this).addClass('error'); 
		$(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
	  }, 
	  oncomplete: function(){ 
		  $(this).closest("form").removeClass('error-phone'); 
		  $(this).removeClass('error'); 
		  $(this).siblings(".error_phone").removeClass('error').html(''); 
	  },
	})
	}
	$('input.phone').on('keydown', function(event) {
	  if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
		  event.preventDefault();
		  $(this).blur();
		  return false;
	  }
	});
	
	  // Mobile Navbar
  $(".navbar-toggle#nav").on("click", function(){
    if( !$(this).hasClass("navbar-toggle--active")){
        $(this).addClass("navbar-toggle--active");
        $(".navbar-mobile").addClass("navbar-mobile--active");
        $(".navbar-mobile").slideDown();
    }else{
        $(this).removeClass("navbar-toggle--active");
        $(".navbar-mobile").removeClass("navbar-mobile--active");
        $(".navbar-mobile").slideUp();
    }
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
    let dropdownActive = $(".navbar-mobile.navbar-mobile--active"); // элемент
      
    if (!dropdownActive.is(e.target) // клик был не по блоку
          && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
          && !$(".navbar-toggle#nav").is(e.target) ) { 
              $(".navbar-toggle").removeClass("navbar-toggle--active");
              dropdownActive.removeClass("navbar-mobile--active");
              $(".navbar-mobile").slideUp();
    }
  });
  // Hide Navigation on Desktop
  $(window).resize(function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
      $(".navbar-toggle").removeClass("navbar-toggle--active");
      $(".navbar-mobile.navbar-mobile--active").removeClass("navbar-mobile--active");
      $(".navbar-mobile").slideUp();
    }
  });
});