/*global $, Chaffle*/

setTimeout(function () {
	"use strict";
	$(".author").fadeIn();
}, 4000);

setTimeout(function () {
	"use strict";
	$(".quote").fadeOut();
}, 6500);

setTimeout(function () {
	"use strict";
	$(".load").each(function (i) {
		$(this).delay(500 * i).slideDown();
	});
}, 7500);

setTimeout(function () {
	"use strict";
	$(".intro").slideDown();
}, 9000);

$(".minimize").on("click", function () {
	"use strict";
	$(".terminal").removeClass("maxterminal");
	$(".interface").removeClass("maxinterface");
	$(".title").fadeToggle(500);
	$(".terminal").toggleClass("minterminal");
	$(".interface").fadeToggle(500);
});

$(".maximize").on("click", function () {
	"use strict";
	$(".terminal").removeClass("minterminal");
	$(".interface").fadeIn(500);
	$(".title").fadeIn(500);
	$(".terminal").toggleClass("maxterminal");
	$(".interface").toggleClass("maxinterface");
});

$("a[href='.intro']").on("click", function (event) {
	"use strict";
	event.preventDefault();
	$(".about, .portfolio").hide();
	$(".intro").slideToggle();
});

$("a[href='.about']").on("click", function (event) {
	"use strict";
	event.preventDefault();
	$(".intro, .portfolio").hide();
	$(".about").slideToggle();
});

$("a[href='.portfolio']").on("click", function (event) {
	"use strict";
	event.preventDefault();
	$(".intro, .about").hide();
	$(".portfolio").slideToggle();
});

var elements = document.querySelectorAll("[data-chaffle]");
Array.prototype.forEach.call(elements, function (el) {
	"use strict";
	var chaffle = new Chaffle(el, {
		speed: 1,
		delay: 25
	});
	chaffle.init();
});