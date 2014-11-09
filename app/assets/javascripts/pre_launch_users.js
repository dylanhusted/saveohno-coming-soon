$(document).ready(function() {
	$('.overlay2').hide();
	$('.new-user-form').hide();

	$('.perk').click(function() {
		$('.overlay2').fadeIn('slow');
	});

	$('.not-perk').click(function() {
		$('.overlay2').fadeIn('slow');
	});

	$('.button-yes').click(function() {
		$('.select-question').fadeOut('fast');
		$('.new-user-form').fadeIn('slow');
	});

	$('.button-no').click(function() {
		$('.overlay2').fadeOut('slow');
	});

	$('.button-close').click(function() {
		$('.new-user-form').hide();
		$('.select-question').show();
	});
});