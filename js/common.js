$(document).ready(function() {
	


	$('.popup').magnificPopup({type:'image'});

	$.stellar({
		responsive: true,
		horizontalOffset:60
	});
	
	$(".carousel").owlCarousel({
		 responsive:{
        0:{
            items: 1 ,
            nav : true
        }
        },
        navText:""
	});

	function wResize(){
		$("header").css("min-height",$(window).height());
	}
	wResize();
	$(window).resize(function() {
		wResize();
	});

	$(" .top_phone .wrapper .tab").click(function(){
		$(" .top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(" .top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(" .tabs_header .wrapper .tab").click(function(){
		$(" .tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(" .tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(" .contats_top  .tab").click(function(){
		$(" .contats_top  .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(" .s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(" .bottom_phone .wrapper .tab").click(function(){
		$(" .bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(" .bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
			}, 1000);
		});
	});
	
});

$(window).load(function() {

	$(".top_header h1").animated("fadeInDown", "fadeOutRight");
	$(".top_header h2").animated("fadeInUp", "fadeOutRight");

	$(".tabs_header .wrapper").animated("flipInY", "fadeOutRight");

	$(" .profi_item").animated("fadeInRight", "fadeOutRight");
	$(" .s_profi form").animated("zoomInRight", "fadeOutRight");

	$(" .s_back h3").animated("fadeInUp", "fadeOutRight");

	$(" footer").animated("fadeInUp", "fadeOutRight");

});