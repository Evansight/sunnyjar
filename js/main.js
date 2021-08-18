$(document).ready(function () {
	$('.slider__images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.slider__nav',
		autoplay: false
	});

	$('.slider__nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider__images',
		dots: true,
		fade: true,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	});

	});



	$(document).ready(function () {
		$(".js_timeline_date").click(function () {
			$(".js_timeline_date").removeClass("active");
			$(this).addClass("active");
			$(".history__info-text").removeClass("active");


			$("." + $(this).data('slide')).addClass("active");


			// if ($(this).data('slide') == "slide1") {
			// 	$(".slide1").addClass("active");
			// }
			// if ($(this).data('slide') == "slide2") {
			// 	$(".slide2").addClass("active");
			// }
			// if ($(this).data('slide') == "slide3") {
			// 	$(".slide3").addClass("active");
			// }
			// if ($(this).data('slide') == "slide4") {
			// 	$(".slide4").addClass("active");
			// }
		});

	});

	// document.querySelector('.header__burger').addEventListener('click', function(){
	// 	document.querySelector('.header__burger span').classList.toggle('active');

	//  })

		document.querySelector('.header__burger').addEventListener('click', function () {
		document.querySelector('.header__burger span').classList.toggle('active');
		document.querySelector('.header__menu').classList.toggle('animate');
		document.querySelector('body').classList.toggle('vertical__hiden');
		})
