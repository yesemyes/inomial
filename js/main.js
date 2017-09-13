;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};


	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    /*if( section == "contact")
		    {
		    	event.preventDefault();
		    	return false;
		    }*/

		    
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};


	


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};



	// Animations
	// Home

	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {	

			$('#fh5co-home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var introAnimate = function() {
		if ( $('#fh5co-intro').length > 0 ) {	

			$('#fh5co-intro').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-intro .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 1000);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var workAnimate = function() {
		if ( $('#fh5co-work').length > 0 ) {	

			$('#fh5co-work').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-work .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var testimonialAnimate = function() {
		var testimonial = $('#fh5co-testimonials');
		if ( testimonial.length > 0 ) {	

			testimonial.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = testimonial.find('.to-animate').length,
						sec = parseInt((sec * 200) - 400);

					setTimeout(function() {
						testimonial.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						testimonial.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInDown animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {	

			services.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);


					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	

	var solutionsAnimate = function() {
		var solutions = $('#fh5co-solutions');
		if ( solutions.length > 0 ) {	

			solutions.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = solutions.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						solutions.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						solutions.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);


					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var industriesAnimate = function() {
		var industries = $('#fh5co-industries');
		if ( industries.length > 0 ) {	

			industries.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = industries.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						industries.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						industries.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);


					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var aboutAnimate = function() {
		var about = $('#fh5co-about');
		if ( about.length > 0 ) {	

			about.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var countersAnimate = function() {
		var counters = $('#fh5co-counters');
		if ( counters.length > 0 ) {	

			counters.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = counters.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						counters.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						counters.find('.js-counter').countTo({
						 	formatter: function (value, options) {
				      		return value.toFixed(options.decimals);
				   		},
						});
					}, 400);

					setTimeout(function() {
						counters.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					

					

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var contactAnimate = function() {
		var contact = $('#fh5co-contact');
		if ( contact.length > 0 ) {	

			contact.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						contact.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	
	


	
	

	// Document on load.
	$(function(){

		parallax();

		burgerMenu();

		clickMenu();

		windowScroll();

		navigationSection();

		goToTop();


		// Animations
		homeAnimate();
		introAnimate();
		workAnimate();
		testimonialAnimate();
		servicesAnimate();
		industriesAnimate();
		solutionsAnimate();
		aboutAnimate();
		countersAnimate();
		contactAnimate();
		

	});


}());


function pageselectCallback(page_index, jq){
	var items_per_page = 10;
	var count = $(".result").length;
	content = $(".result") ;
    var max_elem = Math.min((page_index+1) * items_per_page, count);
    
    var new_content = '';

    for(var i=page_index*items_per_page;i<max_elem;i++)
    {
    	new_content += content[i].outerHTML;
    }
    
    // Replace old content with new content
    $('#Searchresult').html(new_content);

    //return false;
}

/** 
 * Initialisation function for pagination
 */
function initPagination() {
    // count entries inside the hidden content
    var num_entries = $('#hiddenresult div.result').length;
    // Create content inside pagination element
    $("#Pagination").pagination(num_entries, {
        callback: pageselectCallback,
        items_per_page:10 // Show only one item per page
    });
 }

// When document is ready, initialize pagination

$(document).ready(function(){
	initPagination();
});


$(window).on('load', function(e) {
	
	if ( $(window).width() <= 768 ) {
        console.log( $(window).width() );
        $("#fh5co-header .navbar-brand img").remove();
	   	$("#fh5co-header .navbar-brand").append("<img src='/images/inomial-logo.png'>");
	   	$(".navbar-brand").css({"padding":"11px 0"});
    }
    if( $(window).width() > 768 ) {
    	$(document).scroll(function() {
			if( $("#fh5co-header".length) ){
				if( $("#fh5co-header").hasClass("slideInDown") ){
					$("#fh5co-header .navbar-brand img").attr('src', '/images/inomial-logo.png');
					$(".navbar-brand").css({"padding":"11px 0"});
				}else{
					$("#fh5co-header .navbar-brand img").attr('src', '/images/inomial-logo-rgb-72dpi-200px-allwhite.png');
					$(".navbar-brand").css({"padding":"17px 0"});
				}
			}
		});
    }

});


/* moving img */

var swiper = new Swiper('.header-slider', {
    paginationClickable: true,
    spaceBetween: false,
    centeredSlides: true,
    autoplay: 3000,
    speed: 3000,
    autoHeight: true,
    autoplayDisableOnInteraction: false,
    spaceBetween: 30,
        effect: 'fade'
});

/* check form */

/*$(":submit").on("click", function()
{
	var errorName = 0;
	var errorEmail = 0;
	var errorPhone = 0;
	var errorMessage = 0;

	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var message = $("#message").val();

	if( name == '' )  errorName = 1;
	if( email == '' )  errorEmail = 1;
	if( phone == '' )  errorPhone = 1;
	if( message == '' )  errorMessage = 1;

	if( errorName == 0 && errorEmail == 0 && errorPhone == 0 && errorMessage == 0 )
	{
		return true;
	}
	else
	{

	}
});*/
jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please"); 
$(function() {
  
//contactForm
    $("#contactForm").validate({
    
        // Specify the validation rules
        rules: {
            name: {
            	required: true,
            	lettersonly: true	
            },
            _replyto: {
		      	required: true,
		      	email: true
		    },
            phone: {
		      	required: true,
		      	number: true
		    },
            message: {
            	required: true
            }
        },
        
        // Specify the validation error messages
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            phone: "Please enter your phone number",
            message: "Please enter your message"
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });
//subscribeForm
	$("#subscribeForm").validate({
    
        // Specify the validation rules
        rules: {
            _replyto: {
		      	required: true,
		      	email: true
		    },
            fname: {
            	required: true,
            	lettersonly: true
            },
            lname: {
            	required: true,
            	lettersonly: true
            },
            comp: "required"
        },
        
        // Specify the validation error messages
        messages: {
            email: "Please enter a valid email address",
            fname: "Please enter First Name",
            lname: "Please enter Last Name",
            comp: "Please enter Company Name"
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

});


$(document).on("click", ".non-pop-up", function(e){
	e.preventDefault();
	return false;
});