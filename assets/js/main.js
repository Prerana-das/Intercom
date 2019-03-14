$(document).ready(function(){
	
	//Main slider
	$('.slider').owlCarousel({
	items:1,
	loop:true,
	nav:true,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	dots:true,
	autoplay:true,
	});


	//Testimonial slider
	$('.testimonial_slider').owlCarousel({
	items:1,
	loop:true,
	nav:true,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	});
	
	/* Onepage Active */		
		$('.onepage_nav').onePageNav({
			currentClass : 'active',
			scrollSpeed : 1000,
			filter: ':not(.url)'
		});	

	//Masonry	
	$('.grid').masonry({
	  itemSelector: '.grid-item'
	});



		var wow = new WOW(
					{
			boxClass:     'wow',      
			animateClass: 'animated',
			offset:       0,         
			mobile:       true,   
			live:         true,    
			callback:     function(box) {
			},
			scrollContainer: null 
		  }
		);
		wow.init();
		
		
	//Skill barfiller	
	$('#bar1').barfiller({
		barColor: '#C4A37E'
	});
	$('#bar2').barfiller({
		barColor: '#C4A37E'
	});
	$('#bar3').barfiller({
		barColor: '#C4A37E'
	});
	$('#bar4').barfiller({
		barColor: '#C4A37E'
	});
	$('#bar5').barfiller({
		barColor: '#C4A37E'
	})
	;$('#bar6').barfiller({
		barColor: '#C4A37E'
	});
			
	//CounterUp		
	$('.count').counterUp({
		delay: 10,
		time: 1000
	});
});			
		