var page = "index";

function changePage() {
	if (page ===  "index") {
		$("#indexPage").fadeIn();

		$("#navbar").fadeOut();
		$("#loginPage").fadeOut();
		$("body").removeClass("text-invert");
		$("#galleryPage").fadeOut();
		$("body").removeClass("gallery");
		$("#inboxPage").fadeOut();
		$("#galleryTab").fadeOut();
		$("#trendingPage").fadeOut();
	} else if (page === "login") {
		$("body").addClass("text-invert");
		$("#loginPage").fadeIn();

		$("#indexPage").fadeOut();
		$("#galleryPage").fadeOut();
		$("#navbar").fadeOut();
		$("#galleryTab").fadeOut();
		$("body").removeClass("gallery");
		$("#inboxPage").fadeOut();
		$("#trendingPage").fadeOut();
	} else if (page === "gallery") {
		$("body").addClass("gallery");
		$("#galleryPage").fadeIn();

		$("#loginPage").fadeOut();
		$("#indexPage").fadeOut();
		$("#navbar").fadeIn();
		$("#galleryTab").fadeIn();
		$("body").removeClass("text-invert");
		$("#inboxPage").fadeOut();
		$("#trendingPage").fadeOut();
	} else if (page === "inbox") {
		$("#inboxPage").fadeIn();

		$("#galleryPage").fadeOut();
		$("#loginPage").fadeOut();
		$("#indexPage").fadeOut();
		$("#navbar").fadeIn();
		$("#galleryTab").fadeOut();
		$("body").removeClass("text-invert");
		$("body").removeClass("gallery");
		$("#trendingPage").fadeOut();
	} else if (page === "trending") {
		$("#trendingPage").fadeIn();

		$("#galleryPage").fadeOut();
		$("#loginPage").fadeOut();
		$("#indexPage").fadeOut();
		$("#navbar").fadeIn();
		$("#galleryTab").fadeOut();
		$("body").removeClass("text-invert");
		$("body").removeClass("gallery");
		$("#inboxPage").fadeOut();
	}
}
function navbar() {
	var navbar = $("#navbarSide");

	if (navbar.is(":visible")) {
	    navbar.slideUp("slow");
	} else {
	    navbar.slideDown("slow");
	}
}
changePage();

$(".goToLogin").on('click', function() {
	page = "login";
	changePage();
});

$(".goToIndex").on('click', function() {
	page = "index";
	changePage();
});

$(".goToGallery").on('click', function() {
	page = "gallery";
	changePage();
});

/******/

$("#goToInboxNavbar").on('click', function() {
	page = "inbox";
	navbar();
	changePage();
});

$("#goToTrendingNavbar").on('click', function() {
	page = "trending";
	navbar();
	changePage();
});

$("#goToGalleryNavbar").on('click', function() {
	page = "gallery";
	navbar();
	changePage();
});

$("#goToLogoutNavbar").on('click', function() {
	page = "index";
	navbar();
	changePage();
});

/*****/

$(".navbar-show-hide").on('click', function(){
	navbar();
});
