
function teacherSlickSlider(){
	if (screen.width < 768) { 
		$('.teacher-features').not('.slick-initialized').slick({
	        infinite: true,
	      	slidesToShow: 1,
	      	slidesToScroll: 1,
	      	mobileFirst: true,
	      	prevArrow:"<img class='a-left control-c prev slick-prev' src='{{ site.baseurl }}/img/ic_keyboard_arrow_left_black_48dp_1x.png'>",
	      	nextArrow:"<img class='a-right control-c next slick-next' src='{{ site.baseurl }}/img/ic_keyboard_arrow_right_black_48dp_1x.png'>"
	    });
	} else if (screen.width >= 768 && screen.width < 980) { 
		$('.teacher-features').not('.slick-initialized').slick({
	        infinite: true,
	      	slidesToShow: 2,
	      	slidesToScroll: 1,
	      	mobileFirst: true,
	      	prevArrow:"<img class='a-left control-c prev slick-prev' src='{{ site.baseurl }}/img/ic_keyboard_arrow_left_black_48dp_1x.png'>",
	      	nextArrow:"<img class='a-right control-c next slick-next' src='{{ site.baseurl }}/img/ic_keyboard_arrow_right_black_48dp_1x.png'>"
	    });
	} else if (screen.width >= 980) { 
		$('.teacher-features').not('.slick-initialized').slick({
	        infinite: true,
	      	slidesToShow: 4,
	      	slidesToScroll: 1,
	      	mobileFirst: true,
	      	prevArrow:"<img class='a-left control-c prev slick-prev' src='{{ site.baseurl }}/img/ic_keyboard_arrow_left_black_48dp_1x.png'>",
	      	nextArrow:"<img class='a-right control-c next slick-next' src='{{ site.baseurl }}/img/ic_keyboard_arrow_right_black_48dp_1x.png'>"
	    });
	} 
}

function parentSlickSlider(){
	if (screen.width < 768) { 
		$('.parent-features').not('.slick-initialized').slick({
	    	infinite: true,
	      	slidesToShow: 1,
	      	slidesToScroll: 1,
	      	mobileFirst: true,
	      	prevArrow:"<img class='a-left control-c prev slick-prev' src='{{ site.baseurl }}/img/ic_keyboard_arrow_left_black_48dp_1x.png'>",
	      	nextArrow:"<img class='a-right control-c next slick-next' src='{{ site.baseurl }}/img/ic_keyboard_arrow_right_black_48dp_1x.png'>"
	    });
	} else if (screen.width >= 768 && screen.width < 980) { 
		$('.parent-features').not('.slick-initialized').slick({
	        infinite: true,
	      	slidesToShow: 2,
	      	slidesToScroll: 1,
	      	mobileFirst: true,
	      	prevArrow:"<img class='a-left control-c prev slick-prev' src='{{ site.baseurl }}/img/ic_keyboard_arrow_left_black_48dp_1x.png'>",
	      	nextArrow:"<img class='a-right control-c next slick-next' src='{{ site.baseurl }}/img/ic_keyboard_arrow_right_black_48dp_1x.png'>"
	    });
	} else if (screen.width >= 980) { 

		$('.parent-features').not('.slick-initialized').slick({
	        infinite: true,
	      	slidesToShow: 4,
	      	slidesToScroll: 1,
	      	mobileFirst: true,
	      	prevArrow:"<img class='a-left control-c prev slick-prev' src='{{ site.baseurl }}/img/ic_keyboard_arrow_left_black_48dp_1x.png'>",
	      	nextArrow:"<img class='a-right control-c next slick-next' src='{{ site.baseurl }}/img/ic_keyboard_arrow_right_black_48dp_1x.png'>"
	    });
	} 
}

$(document).ready(()=>{
  teacherSlickSlider();
  parentSlickSlider();
})

