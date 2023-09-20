// jQuery(function() {

// 	// ibg class
// 		if('objectFit' in document.documentElement.style === false){
// 		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

// 		    var image = el.querySelector('img');
// 		    el.style.backgroundImage = 'url("'+image.src+'")';
// 		    el.classList.add('ibg');
// 		    el.classList.remove('_fit');
//  		 });
// 		}
// 	// End ibg class

// $(document).on('click', function(e) {
	// var $target = $(e.target);
// });// $(document).on('click')

	// jQuery(document).ready(function() {
	// 	console.log('jQuery document ready');
	// });

// 	//SVG Fallback
// 	// if(!Modernizr.svg) {
// 	// 	$("img[src*='svg']").attr("src", function() {
// 	// 		return $(this).attr("src").replace(".svg", ".png");
// 	// 	});
// 	// };

// 	//E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
// });

// $(window).on('load', function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

(function() {
	// ibg class
	if('objectFit' in document.documentElement.style === false){
	  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	    var image = el.querySelector('img');
	    el.style.backgroundImage = 'url("'+image.src+'")';
	    el.classList.add('ibg');
	    el.classList.remove('_fit');
		 });
	}
	// End ibg class

	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');
		
		Array.prototype.slice.call(document.querySelectorAll('[ data-signup')).forEach(function(item) {
			item.onsubmit = function(e) {
				e.preventDefault();
				e.target.classList.add('form--sended');
			}
		});

		if(document.querySelector('.toggle-mnu') != null){
			document.querySelector('.toggle-mnu').onclick = function(e) {
				this.classList.toggle('on');
				document.documentElement.classList.toggle('menu-opened');
				// document.documentElement.classList.toggle('lock');
			}	
		}
		
	});

	// выбор чекбоксов
	document.onclick = function(e) {
		if(e.target.hasAttribute('data-check') || e.target.closest('[data-check]') !== null){
		 	var parentForm = e.target.closest('[data-check-parent]'),
		 		siblingInput = parentForm.querySelector('.hidden-input');
	 		
	 		parentForm.classList.toggle('checked-item');
	 		siblingInput.checked = !siblingInput.checked;
		}
	}

	//END выбор чекбоксов

	// скрытие формы после отправки
	//END скрытие формы после отправки
})();