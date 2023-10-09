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
		
	// скрытие формы после отправки
		if(document.querySelector('[data-signup') !== null){
			Array.prototype.slice.call(document.querySelectorAll('[ data-signup')).forEach(function(item) {
				item.onsubmit = function(e) {
					e.preventDefault();
					e.target.classList.add('form--sended');
				}
			});		
		}
	//END скрытие формы после отправки

		if(document.querySelector('.toggle-mnu') != null){
			document.querySelector('.toggle-mnu').onclick = function(e) {
				this.classList.toggle('on');
				document.documentElement.classList.toggle('menu-opened');
				document.documentElement.classList.toggle('lock');
			}	
		}
		
	});

	// выбор чекбоксов
	document.onclick = function(e) {
		// заполнение поля и прокрутка до формы подписки на курс
		if(e.target.hasAttribute('data-check') || e.target.closest('[data-check]') !== null){
		 	var parentForm = e.target.closest('[data-check-parent]'),
		 		courseNameValue = parentForm.querySelector('.item-our-courses__title').innerText,
		 		targetForm = document.forms.courseSignupForm;
		 		// siblingInput = parentForm.querySelector('.hidden-input');

			// Scroll to a certain element
	 		if(courseNameValue !== null && targetForm !== null){
				targetForm.elements.courseName.value = courseNameValue;
				targetForm .scrollIntoView({ 
				  behavior: 'smooth' 
				});
	 		}
	 		
	 		// parentForm.classList.toggle('checked-item');
	 		// siblingInput.checked = !siblingInput.checked;
		}
		//END заполнение поля и прокрутка до формы подписки на курс

		if(e.target.hasAttribute('data-register-check') || e.target.closest('[data-register-check]') !== null){
		 	console.log(e.target)
		 	var cashRegisterValue = e.target.closest('[data-register-check]').querySelector('.green-label__term').innerText,
		 		targetForm = document.forms.cashRegisterForm;
		 		// siblingInput = parentForm.querySelector('.hidden-input');

			// Scroll to a certain element
	 		if(cashRegisterValue !== null && targetForm !== null){
				targetForm.elements.selectedCashRegister.value = cashRegisterValue;
				targetForm .scrollIntoView({ 
				  behavior: 'smooth' 
				});
	 		}
	 		
	 		// parentForm.classList.toggle('checked-item');
	 		// siblingInput.checked = !siblingInput.checked;
		}
	}

	//END выбор чекбоксов

// micromodal
	if(document.querySelector('.modal') !== null){
		MicroModal.init({
			openTrigger: 'data-micromodal-open', 
			closeTrigger: 'data-micromodal-close',
			openClass: 'is-open', 
			disableFocus: true, 
			awaitOpenAnimation: true,
			awaitCloseAnimation: true,
			disableScroll: true,
			onShow: function(modal, trigger, event){

				// console.log(trigger)
				// console.log(event)
				// console.log(modal)	
				
				// при disableScroll: true для компенсации ширины скроллбара (фикс "прыгания" страницы влево)
				document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');

			},
			onClose: function(modal) {
				// console.info(`${modal.id} is hidden`);
				
				// при disableScroll: true для компенсации ширины скроллбара (фикс "прыгания" страницы влево)
				document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');

			}
		});		
	}
	// END micromodal


})();