import $ from 'jquery'
import '../../node_modules/popper.js/dist/umd/popper';
import '../../node_modules/bootstrap/js/dist/util';
import '../../node_modules/bootstrap/js/dist/tooltip';

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

	// Подсказка
	$('[data-toggle="tooltip"]').tooltip();
	// Отмена стандартного поведения ссылки
	$('a[data-trigger="click"]').click(function(e){
		e.preventDefault();
	})

	// Слайдер
	if( $('.slider').length > 0 ){
		let $slickIndex = $('.slider#slider-index');
		$slickIndex.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows      : false,
			dots        : true,
			
			autoplay  : false,
		});
		let $slickProduct = $('.slider.slider_product');
		$slickProduct.slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows      : false,
			dots        : false,
			
			autoplay  : false,
			responsive: [
				{
				  breakpoint: 1200,
				  settings  : {
					slidesToShow  : 3,
					slidesToScroll: 3,
				  }
				},
				{
				  breakpoint: 768,
				  settings  : {
					slidesToShow  : 2,
					slidesToScroll: 2,
				  }
				}
			]
		});
	}
	$(".product-prev").on("click", function(){
		$('.slider.slider_product').slick('slickPrev');
	});
	$(".product-next").on("click", function(){
		$('.slider.slider_product').slick('slickNext');
	});
});